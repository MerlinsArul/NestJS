import { BadRequestException, Body, Controller, Get, Post, Req, Res, UnauthorizedException, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';
import {JwtService} from "@nestjs/jwt";
import {Response, Request, response} from 'express';
import { UserDto } from './user.dto';






@Controller('api')
export class UserController {
    constructor(private readonly userservice:UserService , private jwtService:JwtService){}

    @Post('register')
    async register(@Body() userdto:UserDto){
      
        const { name ,email, password } = userdto;
        const hashedpassword = await bcrypt.hash(password , 12);

        const user = await this.userservice.create({
            name,
            email,
            password: hashedpassword,
            type:'user'
          
        });
        console.log(user);
        
       
     delete user.password;

        return user;
    }

    @Post('login')
    async login(
        @Body('email')email:string,
        @Body('password')password:string,
        @Res({passthrough:true})response:Response
        ){
            const user = await this.userservice.findOne({email});
            if(!user){
                throw new BadRequestException('invalid credentials')
            }
            if (!await bcrypt.compare(password, user.password)) {
                throw new BadRequestException('invalid credentials');
            }

            
            const jwt = await this.jwtService.signAsync({_id: user._id,type:user.type});

            response.cookie('jwt', jwt, {httpOnly: true});
    
            return {
                message: 'success'
            };
        }
        
    
        @Get('user')
        async user(@Req() request: Request) {
            try {
                const cookie = request.cookies['jwt'];
    
                const data = await this.jwtService.verifyAsync(cookie);
                console.log(data);
                
    
                if (!data) {
                    throw new UnauthorizedException();
                }
    
                const user = await this.userservice.findOne({_id:data._id});
                
                // const {password, ...result} = user;
    
                return user;

            } catch (e) {
                throw new UnauthorizedException();
            }
        }

        @Post('logout')
        async logout(@Res({passthrough: true}) response: Response) {
            response.clearCookie('jwt');
    
            return {
                message: 'success'
            }
        }
}
