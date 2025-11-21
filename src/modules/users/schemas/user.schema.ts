import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import type { Date, HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>;

@Schema({timestamps: true})
export class User {
  @Prop()
  name: string;

  @Prop()
  email: string;
  
  @Prop()
  password: string;

  @Prop()
  phone: string;

  @Prop()
  address: string;

  @Prop()
  image: string;
  
  @Prop({default: 'LOCAL'})
  accountType: string;

  @Prop({default: 'USERS'})
  role: string;

  @Prop({default: false})
  isActive: boolean;
  
  @Prop()
  codeId: string;

  @Prop({ type: Date, required: true })
  codeExpired: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
