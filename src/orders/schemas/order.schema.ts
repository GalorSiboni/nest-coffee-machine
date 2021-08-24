import * as mongoose from 'mongoose';

export const OrderSchema = new mongoose.Schema({
  customer_name: String,
  is_boss: Boolean,
  price: Number,
  description: String,
});
