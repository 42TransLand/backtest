import { User } from 'src/users/entities/user.entity';
import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { FriendStatus } from '../friend.enum';

@Entity()
export class Friend extends BaseEntity {
  // 친구요청을 보내는 사람 or 친구 수락하는 사람
  @PrimaryColumn()
  @ManyToOne(() => User, (user) => user.id)
  requesterId: number;

  @PrimaryColumn()
  @ManyToOne(() => User, (user) => user.id)
  responserId: number;

  @Column({ default: FriendStatus.NONE })
  status: FriendStatus;

  @Column({ default: false })
  block: boolean;
}
