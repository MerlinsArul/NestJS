import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
export type UserDocument = User & Document;

@Schema({ collection: 'User' })
export class User{
  
  _id:mongoose.Schema.Types.ObjectId
  @Prop()
  name: string;
  @Prop()
  email: string;
  @Prop()
  password:string;
   
  @Prop()
  type:string;
}
export const UserSchema = SchemaFactory.createForClass(User);
