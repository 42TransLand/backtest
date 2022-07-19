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
        
        console.log(nickname);
        return this.userRepository.signIn(nickname);
    }
}
