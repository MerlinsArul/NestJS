import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, Req, Res, UseGuards } from '@nestjs/common';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { StudentDto } from 'src/student.dto';
import { Student } from './student.schema';
import { StudentService } from './student.service';
@Controller('student')
export class StudentController {
    constructor(private studentservice: StudentService) {}

    @Get()
    //@UseGuards()
    async getAll(@Query() query: ExpressQuery ) {
      return this.studentservice.getAll();
    }
  
    @Post('create')
    @UseGuards()
   // @UseGuards(AuthGuard('jwt'))
  
    async createStudent(@Res() response , @Body() studentdto: StudentDto) {
      console.log(studentdto);
    
      try {
        const newStudent = await this.studentservice.create(studentdto);
        return response.status(HttpStatus.CREATED).json({
        message: 'Student has been created successfully',
        newStudent,});
     } catch (err) {
        return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Student not created!',
        error: 'Bad Request'
     });
     }
     
    }
  
    @Get('/:id')
    async getById(@Param('id') id: string) {
      return this.studentservice.getById(id);
    }
  
    @Put('/:id')
    async updateStudent(@Param('id') id: string, @Body() student: Student) {
      return await this.studentservice.update(id, student);
    }
  
    @Delete('/:id')
    async deleteStudent(@Param('id') _id:string){
       await this.studentservice.delete(_id)
    }
}
