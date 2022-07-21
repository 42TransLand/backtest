import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { FriendDto } from './dto/friend.dto';
import { FriendService } from './friend.service';

@Controller('friend')
export class FriendController {
  constructor(private friendService: FriendService) {}

  // [Todo] GetUser를 이용해서 요청을 보내는 자신의 아이디(RequestID)를 확인하는거 필요
  @Post()
  requestFriend(@Body() friendDto: FriendDto): Promise<void> {
    return this.friendService.requestFriend(friendDto);
  }

  @Delete()
  rejectFriend(@Body() friendDto: FriendDto): Promise<void> {
    return this.friendService.rejectFriend(friendDto);
  }
}
