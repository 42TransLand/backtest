import { Injectable } from '@nestjs/common';
import { UserRepository } from './users.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository
    ) { }

    async signIn(nickname: string): Promise<void> {
        //const user = .create({nickname});
        return this.userRepository.signIn(nickname);
    }
}
