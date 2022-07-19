import { Controller, Post } from '@nestjs/common';
import { GameService } from './game.service';

@Controller('games')
export class GameController {
	constructor(private gameService: GameService) {}

    //  @Post()
	//  createGame(@Body() )
    
}
