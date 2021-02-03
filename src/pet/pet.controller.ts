import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { get } from 'http';
import { PetDto } from './pet.input';
import { PetService } from './pet.service';

@Controller('pet')
export class PetController {
    constructor(
        private petService: PetService
    ) { }

    @Get()
    async getPets() {
        return await this.petService.findAllPetService()
    }

    @Get('only6')
    async getPetOnly6() {
        return await this.petService.findPetByLimit()
    }

    @Post()
    async createPet(@Body() data: PetDto) {
        let result = await this.petService.createPetService(data)
        return result
    }

    @Get(':id')
    async getPetById(@Param('id') id: string) {
        return await this.petService.findPetById(id)

    }
}
