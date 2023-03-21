import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import Document from "mongoose";
export type OrderDocument = Order & Document

@Schema({collection:'order'})
export class Order {
   @Prop()
   title: string;
   @Prop()
   courseid: number;
   @Prop()
   description: string;
   @Prop()
   image: string;
 
}

export const OrderSchema = SchemaFactory.createForClass(Order);