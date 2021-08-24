import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderSchema = Order & Document;

@Schema()
export class Order {
  @Prop({ required: true })
  customer_name: string;

  @Prop()
  description: string;

  @Prop()
  price: number;

  @Prop()
  is_boss: boolean;
  static customer_name: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
