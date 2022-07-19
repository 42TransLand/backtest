import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { GameModule } from './game/game.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './config/typeorm.config';
import { UserRepository } from './users/users.repository';

@Module({
  imports: [UsersModule, GameModule,
  TypeOrmModule.forRoot(typeORMConfig),
 // TypeOrmModule.forFeature(UserRepository),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
