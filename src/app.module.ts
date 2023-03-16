import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { CourseController } from './course/course.controller';
import { CourseService } from './course/course.service';
import { CourseModule } from './course/course.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017',{dbName:'aspire'}),
    UserModule,
    PassportModule,
    JwtModule.register({
      secret:'secret',
      signOptions:{expiresIn:'1d'}
    }),
    CourseModule,],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}