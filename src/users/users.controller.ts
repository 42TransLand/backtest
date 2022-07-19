import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { GameRecord } from 'src/game/entities/game.entity';
import { GameService } from 'src/game/game.service';
import { UserDto } from './dto/userdto';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post('/signin')
    signIn(@Body() user: UserDto):Promise<void> {
        const nickname = user.nickname;
        return this.usersService.signIn(nickname);
    }


}
