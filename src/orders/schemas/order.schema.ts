import * as mongoose from 'mongoose';

export const OrderSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  description: String,
});
