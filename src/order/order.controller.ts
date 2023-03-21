import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { OrderDto } from './order.dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
    constructor(private orderservice: OrderService) {}
    
    @Get()
    async getData(@Query() query:ExpressQuery){
        return this.orderservice.getall()
    }

    @Post()
    async addToenroll(@Body() orderdto:OrderDto){
       //const email = req.user.email
        console.log(orderdto);
        return this.orderservice.addToOrder(orderdto)
        
    }

    @Delete('/:_id')
    async delete(@Param('_id')id:string){
        const ordercourse = await this.orderservice.delete(id);
        return ordercourse;
    }
}
