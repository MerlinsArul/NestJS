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

}
