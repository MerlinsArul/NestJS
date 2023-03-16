import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Enroll, EnrollDocument } from './enroll.schema';

@Injectable()
export class EnrollService {
    constructor(@InjectModel(Enroll.name) private enrollModel:Model<EnrollDocument>){}

    async getall():Promise<Enroll[]>{
        return this.enrollModel.find().exec()
    }


    async addToEnroll(enroll:Enroll){
        const enrollData = new this.enrollModel(enroll);
        return enrollData.save()
   }

   async delete(_id:any){
      const deletedCourse = await this.enrollModel.findByIdAndRemove(_id);
      return deletedCourse;
   }
}
