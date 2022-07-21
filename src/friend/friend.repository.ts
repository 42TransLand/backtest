import { NotFoundException } from '@nestjs/common';
import { send } from 'process';
import { User } from 'src/users/entities/user.entity';
import { Equal, Repository } from 'typeorm';
import { CustomRepository } from '../custom/typeorm.decorator';
import { FriendDto } from './dto/friend.dto';
import { Friend } from './entities/friend.entity';
import { FriendStatus } from './friend.enum';

@CustomRepository(Friend)
export class FriendRepository extends Repository<Friend> {
  async requestFriend(sender: User, receiver: User): Promise<void> {
    const requester: User = sender;
    const responser: User = receiver;
    //const test = await this.find();
    //console.log(test);
    // const result = await this.createQueryBuilder()
    //   .update(Friend)
    //   .set({ status: FriendStatus.FRINED })
    //   .where('requesterId = :requester', { requester })
    //   .orWhere('responser = :responser', { responser })
    //   .execute();
    //const test2 = await this.createQueryBuilder()
    //  .select()
    //  .from(Friend, 'friend')
    //  .execute();
    //console.log(test2);
    const result = await this.findOne({
      relations: {
        requester: true,
        responser: true,
      },
      where: {
        requester: { id: Equal(requester.id) },
        responser: { id: Equal(responser.id) },
      },
    });

    console.log(result);
    if (result !== null) {
      //throw new NotFoundException([`차단된 유저 입니다.`]);
      if (result.block === true)
        throw new NotFoundException([`차단된 유저 입니다.`]);
      if (result.status === FriendStatus.FRINED) {
        throw new NotFoundException([`이미 친구다.`]);
      } else if (result.status === FriendStatus.PENDDING) {
        throw new NotFoundException([`이미 친구 요청 보냈다.`]);
      }
    }
    const friend = this.create({
      requester: sender,
      responser: receiver,
      status: FriendStatus.PENDDING,
    });
    await this.save(friend);
  }

  async acceptFriend(sender: User, receiver: User): Promise<void> {
    const result = await this.findOneBy({
      requester: Equal(sender),
      responser: Equal(receiver),
      status: FriendStatus.PENDDING,
      block: false,
    });
    result.status = FriendStatus.FRINED;
    await this.save(result);

    const friend = this.create({
      requester: sender,
      responser: receiver,
      status: FriendStatus.FRINED,
      block: false,
    });
    await this.save(friend);
  }

  async rejectFriend(sender: User, receiver: User): Promise<void> {
    const result = await this.delete({
      requester: Equal(sender),
      responser: Equal(receiver),
      status: FriendStatus.PENDDING,
    });

    if (result.affected === 0) {
      throw new NotFoundException([
        `Friend with ${sender.nickname} which status is ${FriendStatus.PENDDING} not found.`,
      ]);
    }
  }
}
