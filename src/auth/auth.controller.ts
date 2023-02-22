import { Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('')
export class AuthController{
    constructor(private authservice:AuthService){}

    // @Get()
    // home(){

    //     return "I am home"
    //  }


    @Get('signup')
    signup(){
        this.authservice.signup()

    }

    @Post('login')

    login(){
       this.authservice.signin()
    }
}