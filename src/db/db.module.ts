import postgres from 'postgres';
import { Global, Module } from '@nestjs/common';
import { DB } from '../constants';
import { ConfigService } from '@nestjs/config';
import { drizzle } from 'drizzle-orm/postgres-js';
import * as drizzleSchema from '../../drizzle/schema';

@Global()
@Module({
  providers: [
    {
      provide: DB,
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const queryClient = postgres(
          configService.getOrThrow<string>('DATABASE_URL'),
        );
        return drizzle(queryClient, { schema: drizzleSchema });
      },
    },
  ],
  exports: [DB],
})
export class DbModule {}
