import { IsAlphanumeric, MaxLength, maxLength } from "class-validator";

export class Createcustomdto{
  @IsAlphanumeric()
@MaxLength(5)
    name:string;

}