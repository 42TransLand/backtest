import { Module, DynamicModule, Provider } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './users.repository';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { USERS_CUSTOM_REPOSITORY } from "./users.decorator";
import { getDataSourceToken } from "@nestjs/typeorm";
import { DataSource } from "typeorm";

export class TypeOrmExModule {
  public static forCustomRepository<T extends new (...args: any[]) => any>(repositories: T[]): DynamicModule {
    const providers: Provider[] = [];

    for (const repository of repositories) {
      const entity = Reflect.getMetadata(USERS_CUSTOM_REPOSITORY, repository);

      if (!entity) {
        continue;
      }
      providers.push({
        inject: [getDataSourceToken()],
        provide: repository,
        useFactory: (dataSource: DataSource): typeof repository => {
          const baseRepository = dataSource.getRepository<any>(entity);
          return new repository(baseRepository.target, baseRepository.manager, baseRepository.queryRunner);
        },
      });
    }

    return {
      exports: providers,
      module: TypeOrmExModule,
      providers,
    };
  }
}

@Module({
  imports: [
    TypeOrmExModule.forCustomRepository([UserRepository])
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
