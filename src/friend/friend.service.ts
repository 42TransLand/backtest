import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { FriendDto } from './dto/friend.dto';
import { FriendRepository } from './friend.repository';

@Injectable()
export class FriendService {
  constructor(
    @InjectRepository(FriendRepository)
    private frinedRepository: FriendRepository,
    private userService: UsersService,
  ) {}

  async requestFriend(friendDto: FriendDto): Promise<void> {
    const { requester, responser } = friendDto;

    // [Todo] re
    const reqUser = await this.userService.findByNickname(requester);
    const resUser = await this.userService.findByNickname(responser);
    return this.frinedRepository.requestFriend(reqUser, resUser);
  }

  async acceptFriend(friendDto: FriendDto): Promise<void> {
    const { requester, responser } = friendDto;

    const reqUser = await this.userService.findByNickname(requester);
    const resUser = await this.userService.findByNickname(responser);

    this.frinedRepository.acceptFriend(reqUser, resUser);
  }

  async rejectFriend(friendDto: FriendDto): Promise<void> {
    const { requester, responser } = friendDto;

    const reqUser = await this.userService.findByNickname(responser);
    const resUser = await this.userService.findByNickname(requester);
    return this.frinedRepository.rejectFriend(reqUser, resUser);
  }
}
