import { Body, Controller, Delete, Get, Param, Post, Query, Request } from '@nestjs/common';
import { query } from 'express';
import { EnrollService } from './enroll.service';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { EnrollDto } from './enroll.dto';

@Controller('enroll')
export class EnrollController {
    constructor(private enrollservice: EnrollService) {}

    @Get()
    async getData(@Query() query:ExpressQuery){
        return this.enrollservice.getall()
    }

    @Post()
    async addToenroll(@Body() enrolldto:EnrollDto){
       //const email = req.user.email
        console.log(enrolldto);
        return this.enrollservice.addToEnroll(enrolldto)
        
    }

    @Delete('/:_id')
    async delete(@Param('_id')id:string){
        const enrolledcourse = await this.enrollservice.delete(id);
        return enrolledcourse;
    }

}
