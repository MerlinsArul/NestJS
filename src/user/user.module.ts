import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[
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
  exports:[MongooseModule,JwtModule]
})
export class UserModule {

}
