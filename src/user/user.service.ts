import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserDto } from './user.input';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) { }

    async createUser(data: UserDto) {
        let result = await this.usersRepository.save(data)
        return result


    }

    async findAllUser(): Promise<User[]> {
        return await this.usersRepository.find()
    }

    async findUserById(id: string) {
        return await this.usersRepository.findOne(id)
    }
}
