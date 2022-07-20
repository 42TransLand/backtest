import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { GameRecord } from 'src/game/entities/game.entity';
import { User } from 'src/users/entities/user.entity';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  password: '1234',
  port: 5432,
  username: 'postgres',
  // database: 'jiho',
  database: 'test',
  // entities: [__dirname + '/../**/*.entity{.ts,.js}'],

  entities: [User, GameRecord],
  synchronize: true,
};
