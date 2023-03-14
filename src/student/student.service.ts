import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student, StudentDocument } from './student.schema';

@Injectable()
export class StudentService {
    constructor(@InjectModel(Student.name) private studentModel:Model<StudentDocument>){}

    async getAll():Promise<Student[]>{
        return this.studentModel.find().exec();
    }

    async create(student:Student){
        const newstudent = new this.studentModel(student);
        console.log(newstudent);
    return newstudent.save();
    }

    async getById(_id:string){
        return this.studentModel.findById(_id).exec()
    }

    async update(_id:string,student:Student){
         return await this.studentModel.findByIdAndUpdate(_id,student,{new:true})
    }

    async delete(_id:string){
        return await this.studentModel.findByIdAndRemove(_id)
    }
}


