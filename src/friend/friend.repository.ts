import { NotFoundException } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CustomRepository } from '../custom/typeorm.decorator';
import { FriendDto } from './dto/friend.dto';
import { Friend } from './entities/friend.entity';
import { FriendStatus } from './friend.enum';

@CustomRepository(Friend)
export class FriendRepository extends Repository<Friend> {
  async requestFriend(sender: User, receiver: User): Promise<void> {
    const requesterId = sender.id;
    const responserId = receiver.id;

    const friend = this.create({
      requesterId,
      responserId,
      status: FriendStatus.PENDDING,
    });

    await this.save(friend);
  }

  async rejectFriend(sender: User, receiver: User): Promise<void> {
    const result = await this.delete({
      requesterId: sender.id,
      responserId: receiver.id,
      status: FriendStatus.PENDDING,
    });

    if (result.affected === 0) {
      throw new NotFoundException([
        `친구 삭제 안됨`,
        //`Friendship with ${} which status is ${FriendshipStatus.REQUESTED} not found.`,
      ]);
    }
  }
}
