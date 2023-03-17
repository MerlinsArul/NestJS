import { Body, Controller, Delete, Get, Param, Post, Put, Query, Res } from '@nestjs/common';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { CourseDto } from './course.dto';
import { Course } from './course.schema';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController {

    constructor(private courseservice: CourseService) {}

    @Get()
    async getAll(@Query() query: ExpressQuery ){
        return this.courseservice.getCourse();
    }

    @Post()
    async createCourse(@Body() coursedto:CourseDto){
       return this.courseservice.createCourse(coursedto)
    }

   @Get('/:id')
  async getById(@Param('id') id: string) {
    return this.courseservice.getById(id);
  }

   @Put('/:id')
  async updateStudent(@Param('id') id: string, @Body() course: Course) {
    return await this.courseservice.update(id, course);
  }

  @Delete('/:id')
  async deleteStudent(@Param('id') _id:string){
     await this.courseservice.delete(_id)
  }
}
