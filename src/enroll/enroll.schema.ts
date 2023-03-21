import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document, SchemaTypes } from "mongoose";
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

export const EnrollSchema = SchemaFactory.createForClass(Enroll);