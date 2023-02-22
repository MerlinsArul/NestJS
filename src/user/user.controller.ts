import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { Userdto } from './user.dto';
import { User } from './user.interface';
import { UserService } from './user.service';


@Controller('user')
export class UserController {
  constructor(private userservice:UserService){}
//     @Get()
//    findnumber(@Req() request:Request): string{
//             return 'This action will return all the requests'
//     }

//     @Post()
//     async create(@Body() userdto:Userdto ){
//         return `This adds a new userdto  ${JSON.stringify(userdto)}`
//     }
@Post()
async create(@Body() userdto:Userdto){
    this.userservice.create(userdto)
}

@Get()
async findAll():Promise<User[]>{
    return this.userservice.findAll()
}

}
