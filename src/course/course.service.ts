import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course, CourseDocument } from './course.schema';

@Injectable()
export class CourseService {
    constructor(@InjectModel(Course.name) private courseModel:Model<CourseDocument>){}  

async getCourse():Promise<Course[]>{
    return this.courseModel.find().exec();
}

async createCourse(course:Course){
    const newCourse = new this.courseModel(course);
    console.log(newCourse);
    return newCourse.save();
}
 async getById(_id:string){
        return this.courseModel.findById(_id).exec()
    }

      async update(_id:string,course:Course){
         return await this.courseModel.findByIdAndUpdate(_id,course,{new:true})
    }

    async delete(_id:string){
        return await this.courseModel.findByIdAndRemove(_id)
    }
}
