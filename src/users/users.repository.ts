import { EntityRepository, Repository } from "typeorm";
import { User } from "./entities/user.entity";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async signIn(nickname: string): Promise<void> {
        const user = this.create({nickname});
        await this.save(user);
    }
}