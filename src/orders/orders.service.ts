import { Injectable } from '@nestjs/common';
import { Order } from './interfaces/order.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class OrdersService {
  constructor(@InjectModel('Orders') private readonly orderModel: Model<Order>) { }

  async createNewOrder(order: Order): Promise<Order> {
    const newOrder = new this.orderModel(order);
    return await newOrder.save();
  }

  async getAllOrders(): Promise<Order[]> {
    return await this.orderModel.find();
  }

  async findOne(id: string): Promise<Order> {
    return await this.orderModel.findOne({ _id: id });
  }

  async update(id: string, order: Order): Promise<Order> {
    return await this.orderModel.findByIdAndUpdate(id, order);
  }

  async delete(id: string): Promise<Order> {
    return await this.orderModel.findByIdAndDelete(id);
  }
}
