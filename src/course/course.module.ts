import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseController } from './course.controller';
import { CourseSchema } from './course.schema';
import { CourseService } from './course.service';

@Module({
    imports:[
        MongooseModule.forFeature([{
            name:'Course',
            schema:CourseSchema ,
            collection:'course'
        }])
      ],
    providers: [CourseService],
    controllers: [CourseController],
    exports:[CourseService,MongooseModule]
})
export class CourseModule {}
