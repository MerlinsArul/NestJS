import { IsNotEmpty, Length } from "class-validator";

export class Createquizdto{
  @IsNotEmpty({message:'The quiz should have title'})
  @Length(5,100)
  title:string;

  @IsNotEmpty({message:'The quiz should have description'})
  @Length(5)
  description:string;
}