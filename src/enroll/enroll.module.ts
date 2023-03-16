import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EnrollController } from './enroll.controller';
import { EnrollSchema } from './enroll.schema';
import { EnrollService } from './enroll.service';

@Module({
    imports:[
        MongooseModule.forFeature([{
            name:'Enroll',
            schema:EnrollSchema ,
            collection:'enroll'
        }])
      ],
    providers: [EnrollService],
    controllers: [EnrollController],
    exports:[EnrollService,MongooseModule]
})
export class EnrollModule {}
