import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersController } from './orders/orders.controller';
import { OrdersService } from './orders/orders.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersModule } from './orders/orders.module';
import keys from './config/keys';

@Module({
  imports: [OrdersModule, MongooseModule.forRoot(keys.mongoURI)],
  controllers: [AppController, OrdersController],
  providers: [AppService],
})
export class AppModule { }
