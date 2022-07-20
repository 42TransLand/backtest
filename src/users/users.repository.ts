import { Repository } from 'typeorm';
import { CustomRepository } from '../custom/typeorm.decorator';
import { User } from './entities/user.entity';

@CustomRepository(User)
export class UserRepository extends Repository<User> {
  async signIn(nickname: string): Promise<void> {
    const user = this.create({ nickname });
    await this.save(user);
  }
}
