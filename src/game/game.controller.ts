import { Controller, Post, Body, Get } from '@nestjs/common';
import { GameService } from './game.service';
import { GameRecodDto } from './dto/game.recode.dto';
import { GameRecord } from './entities/game.entity';

@Controller('games')
export class GameController {
	constructor(private gameService: GameService) {}

	@Post()
	createGame(@Body() gameRecodDto :GameRecodDto): Promise<void> {
		return this.gameService.createGame(gameRecodDto);
	}


	//@Get()
	//getAllGames(): Promise<GameRecord[]> {
        // const user = { id: 1, nickname: "plee" }
		//this.logger.verbose(`User ${user.username} trying to get all boards`);
			//return this.gameService.getAllGames(1);
	//}
}
