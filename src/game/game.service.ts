import { Injectable } from '@nestjs/common';
import { GameRepository } from './game.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { GameRecodDto } from './dto/game.recode.dto';
import { GameRecord } from './entities/game.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class GameService {

	constructor(
        @InjectRepository(GameRepository)
        private gameRepository: GameRepository
	) {}

    async createGame(gameRecodDto: GameRecodDto): Promise<void> {
		return this.gameRepository.createGame(gameRecodDto);
	}

	//async getAllGames(user: number): Promise<GameRecord[]> {
	//	const query = this.gameRepository.createQueryBuilder('game');

	//	query.where('game.left_user_id = :userId', { userId: user })
	//	.orWhere('games.right_user_id = :userId', { userId: user})

	//	const boards = await query.getMany();
	//	return boards;
	//}
}
