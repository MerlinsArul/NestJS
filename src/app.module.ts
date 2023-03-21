import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { CourseModule } from './course/course.module';
import { EnrollController } from './enroll/enroll.controller';
import { EnrollService } from './enroll/enroll.service';
import { EnrollModule } from './enroll/enroll.module';
import { OrderController } from './order/order.controller';
import { OrderService } from './order/order.service';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017',{dbName:'aspire'}),
    UserModule,
    PassportModule,
    JwtModule.register({
      secret:'secret',
      signOptions:{expiresIn:'1d'}
    }),
    CourseModule,
    EnrollModule,
    OrderModule,],
  controllers: [AppController, UserController, EnrollController, OrderController],
  providers: [AppService, EnrollService, OrderService],
})
export class AppModule {}
