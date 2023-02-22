import { Injectable } from "@nestjs/common";


@Injectable({})
export class AuthService{

   signup(){
     return {msg :"hi i am signup"}
   }

   signin(){
     return "I am signin"
   }
}

