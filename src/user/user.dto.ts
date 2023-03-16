import { IsEmail, IsNotEmpty, MaxLength } from "class-validator";



export class UserDto{


    @IsNotEmpty()
    name:string;

    @IsEmail()
    @IsNotEmpty()
    email:string;

    @IsNotEmpty()
    @MaxLength(6)
    password:string;


}