import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserDto } from './user.input';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService
    ) { }

    @Post()
    async createUser(@Body() data: UserDto) {
        return await this.userService.createUser(data)
        
    }

    @Get()
    async getAllShelter() {
        return await this.userService.findAllUser()
    }

    @Get(':id')
    async getShelterById(@Param('id') id: string) {
        return await this.userService.findUserById(id)
    }
}
