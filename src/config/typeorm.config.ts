import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeORMConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    password: '1234',
    port: 5432,
    username: 'postgres',
    //database: 'jiho',
    database: 'test',
    entities: [__dirname + '/../**/*.entity.{js, ts}'],
    synchronize: true
} 