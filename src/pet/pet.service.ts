import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pet } from './pet.entity';
import { PetDto } from './pet.input';

@Injectable()
export class PetService {
    constructor(
        @InjectRepository(Pet)
        private usersRepository: Repository<Pet>,
    ) { }

    async createPetService(data: PetDto) {
        let result = await this.usersRepository.save(data)
        return result
    }

    async findAllPetService() {
        return await this.usersRepository.find()
    }

    async findPetById(id: string): Promise<Pet> {
        return await this.usersRepository.findOne(id)
    }

    async findPetByLimit() {
        return await this.usersRepository.find({
            take: 6,
            order: {
                id: "ASC"
            }
        })
    }
}
