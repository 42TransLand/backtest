import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { userDto } from './dto/userdto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post('/signin')
    signIn(@Body() user: userDto):Promise<void> {
        const nickname = user.nickname;
        return this.usersService.signIn(nickname);
    }


}
