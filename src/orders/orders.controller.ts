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
  constructor(private readonly itemService: OrdersService) {}

  @Get()
  findAll(): Promise<Order[]> {
    return this.itemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Order> {
    return this.itemService.findOne(id);
  }

  @Post()
  create(@Body() CreateItemDto: CreateOrderDto): Promise<Order> {
    return this.itemService.create(CreateItemDto);
  }

  @Put(':id')
  update(
    @Body() CreateItemDto: CreateOrderDto,
    @Param('id') id,
  ): Promise<Order> {
    return this.itemService.update(id, CreateItemDto);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<Order> {
    return this.itemService.delete(id);
  }
}
