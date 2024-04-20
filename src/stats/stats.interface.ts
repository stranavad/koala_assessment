export interface StatsResultDB {
  id: number;
  name: string;
  gender: string;
  ability: string;
  minimalDistance: string;
  weight: string;
  born: string;
  inSpaceSince: string;
  beerConsumption: number;
  knowsTheAnswer: boolean;
  nemesis: {
    id: number;
    isAlive: boolean;
    years: number;
    secrets: {
      id: number;
      secretCode: number;
    }[];
  }[];
}

export interface Stats {
  averageAge: number;
  averageWeight: number;
  genders: Record<string, number>;
  characterCount: number;
}

export interface StatsResult {
  key: number;
}
