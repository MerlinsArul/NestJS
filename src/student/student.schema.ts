import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
export type StudentDocument = Student & Document

@Schema({collection:'Student'})
export class Student {
   @Prop()
   name: string;
   @Prop()
   rollnumber: number;
   @Prop()
   course: string;
   @Prop()
   gender: string;
 
}
export const StudentSchema = SchemaFactory.createForClass(Student);