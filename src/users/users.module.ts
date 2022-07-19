import { Module, DynamicModule, Provider } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './users.repository';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { getDataSourceToken } from "@nestjs/typeorm";
import { DataSource } from "typeorm";
import { TypeOrmExModule } from 'src/custom/typeorm.module';

@Module({
  imports: [
    TypeOrmExModule.forCustomRepository([UserRepository])
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}