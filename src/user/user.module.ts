import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { UserController } from './user.controller';
import { UserSchema } from './user.schema';
import { UserService } from './user.service';

@Module({
  imports:[
    PassportModule,
    MongooseModule.forFeature([{
        name:'User',
        schema:UserSchema,
        collection:'User'
    }]),
    JwtModule.register({
      secret:'secret',
      signOptions:{expiresIn:'1d'}
    })
   
  ],
  providers: [UserService],
  controllers: [UserController],
  exports:[MongooseModule,JwtModule,UserService]
})
export class UserModule {}
