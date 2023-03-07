import mongoose from "mongoose";
import { Role } from "src/model/role.enum";

export class UserDto{

    name:string;

    email:string;

    password:string;

    type:string

}