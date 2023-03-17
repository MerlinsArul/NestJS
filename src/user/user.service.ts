import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import e from 'express';
import { Model } from 'mongoose';
import { UserDto } from './user.dto';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel:Model<UserDocument>){}


    async create(userdto:UserDto):Promise <User>{
       const createuser = new this.userModel(userdto);
       return createuser.save()
    }

    async findOne(userModel):Promise <User>{
        const user = await this.userModel.findOne(userModel)
        return user
        //return this.userModel.findOne(userModel);
    }
}
