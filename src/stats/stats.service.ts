import { Inject, Injectable } from '@nestjs/common';
import { DrizzleConnection } from '../db/db.types';
import { DB } from '../constants';
import { Stats, StatsResultDB } from './stats.interface';

@Injectable()
export class StatsService {
  constructor(@Inject(DB) private readonly db: DrizzleConnection) {}

  private getAge(born: string): number {
    const bornDate = new Date(born);
    const currentDate = new Date();

    const diffInMs = Math.abs(currentDate.getTime() - bornDate.getTime());
    // This leap year calculation could be improved, by checking which years are leaps, in the current difference
    const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25); // ms -> s -> min -> hour -> day -> year (inc. leap every four years -> 1/4 => +0.25)
    return Math.floor(diffInYears);
  }

  private getStats(items: StatsResultDB[]): Stats {
    let weightsSum = 0;
    let weightsCount = 0;
    let agesSum = 0;
    let agesCount = 0;
    const genders: Stats['genders'] = {};

    items.forEach((character) => {
      // Weight
      const parsedWeight = parseFloat(character.weight);
      if (!isNaN(parsedWeight)) {
        weightsSum += parsedWeight;
        weightsCount++;
      }

      // Genders
      const maleKeys = ['m', 'male'];
      const femaleKeys = ['f', 'female'];
      const transformedGender = (character.gender || 'no-gender').toLowerCase();
      const key = maleKeys.includes(transformedGender)
        ? 'male'
        : femaleKeys.includes(transformedGender)
          ? 'female'
          : transformedGender;
      genders[key] = (genders[key] || 0) + 1;

      //Ages
      agesSum += this.getAge(character.born);
      agesCount++;

      character.nemesis.forEach((nemesis) => {
        // This condition may be omitted, depends on the exact way, how the average age is counted
        if (nemesis.isAlive) {
          agesSum += nemesis.years;
          agesCount++;
        }
      });
    });

    return {
      averageAge: Math.floor(agesSum / agesCount),
      averageWeight: Math.floor(weightsSum / weightsCount),
      characterCount: items.length,
      genders,
    };
  }

  async getData() {
    const characters: StatsResultDB[] = await this.db.query.character.findMany({
      with: {
        nemesis: {
          with: {
            secrets: {
              columns: {
                nemesisId: false,
              },
            },
          },
          columns: {
            characterId: false,
          },
        },
      },
    });

    const stats = this.getStats(characters);

    return {
      stats,
      characters,
    };
  }
}
