import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
export type CourseDocument = Course & Document

@Schema({collection:'course'})
export class Course {

   _id:string
   @Prop()
   title: string;
   @Prop()
   courseid: number;
   @Prop()
   description: string;
   @Prop()
   image: string;
 
}

export const CourseSchema = SchemaFactory.createForClass(Course);