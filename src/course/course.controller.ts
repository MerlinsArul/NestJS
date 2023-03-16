import { Controller, Get, Query } from '@nestjs/common';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController {

    constructor(private courseservice: CourseService) {}

    @Get()
    async getAll(@Query() query: ExpressQuery ){
        return this.courseservice.getCourse();
    }
}
