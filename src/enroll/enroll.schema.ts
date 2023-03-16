import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
export type EnrollDocument = Enroll & Document

@Schema({collection:'enroll'})
export class Enroll {
   @Prop()
   title: string;
   @Prop()
   courseid: number;
   @Prop()
   description: string;
   @Prop()
   image: string;
 
}

export const CourseSchema = SchemaFactory.createForClass(Enroll);