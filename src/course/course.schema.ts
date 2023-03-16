import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
export type CourseDocument = Course & Document

@Schema({collection:'course'})
export class Course {
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