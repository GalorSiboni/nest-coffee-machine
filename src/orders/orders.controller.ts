import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-dto-order';
import { OrdersService } from './orders.service';
import { Order } from './interfaces/order.interface';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  getAllOrders(): Promise<Order[]> {
    return this.ordersService.getAllOrders();
  }

  @Get(':id')
  getOrderById(@Param('id') id): Promise<Order> {
    return this.ordersService.findOne(id);
  }

  @Post()
  createNewOrder(@Body() CreateOrderDto: CreateOrderDto): Promise<Order> {
    return this.ordersService.createNewOrder(CreateOrderDto);
  }

  @Delete(':id')
  deleteOrder(@Param('id') id): Promise<Order> {
    return this.ordersService.delete(id);
  }
}
