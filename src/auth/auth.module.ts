// import { Module } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { PassportModule } from '@nestjs/passport';
// import { LocalStrategy } from './local.strategy';
// import { UserModule } from 'src/user/user.module';
// import { JwtModule } from '@nestjs/jwt';

// @Module({
//     imports: [UserModule, PassportModule.register({defaultStrategy:'local'}),
//         JwtModule.register({
//             secret:'secret',
//             signOptions:{expiresIn:'1d'}
//           })],
//     providers: [AuthService, LocalStrategy],
//     exports:[AuthService]
// })
// export class AuthModule {}