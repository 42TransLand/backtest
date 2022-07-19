import { gameMode } from "../constants/game.mode.enum";

export class GameRecodDto {
    
    left_user: number;
	right_user: number;
	left_user_score: number;
	right_user_score: number;
    result: number;
    type: gameMode;
}