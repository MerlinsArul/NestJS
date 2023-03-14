import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017',{dbName:'aspire'}),
    UserModule,
    PassportModule,
    JwtModule.register({
      secret:'secret',
      signOptions:{expiresIn:'1d'}
    }),
    StudentModule,
 ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
