import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Enroll } from 'src/enroll/enroll.schema';
import { OrderDto } from './order.dto';
import { Order, OrderDocument } from './order.schema';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
  ) {}
  async getall(): Promise<Order[]> {
    return this.orderModel.find().exec();
  }

  async addToOrder(order: Order) {
    const orderData = await this.orderModel.insertMany(order);
    console.log(orderData);
    return orderData;
  }

 

  async delete(_id: any) {
    const deletedCourse = await this.orderModel.findByIdAndRemove(_id);
    return deletedCourse;
  }
}
