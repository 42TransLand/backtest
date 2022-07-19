import { CustomRepository } from "../custom/typeorm.decorator"
import { GameRecord } from "./entities/game.entity"
import { Repository } from "typeorm"
import { GameRecodDto } from './dto/game.recode.dto';
import { gameMode } from "./constants/game.mode.enum";

@CustomRepository(GameRecord)
export class GameRepository extends Repository<GameRecord> {
	async createGame(gameRecodDto: GameRecodDto): Promise<void> {

		const {left_user, right_user, left_user_score, right_user_score, result, type} = gameRecodDto;
		const game = this.create({
            left_user,
            right_user,
            left_user_score,
            right_user_score,
            result,
            type//: gameMode.LADDER_GAME

        });
		await this.save(game);
	}
}