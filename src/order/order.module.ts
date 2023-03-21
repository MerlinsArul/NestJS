import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderController } from './order.controller';
import { OrderSchema } from './order.schema';
import { OrderService } from './order.service';

@Module({
    imports:[
        MongooseModule.forFeature([{
            name:'Order',
            schema:OrderSchema ,
            collection:'order'
        }])
      ],
    providers: [OrderService],
    controllers: [OrderController],
    exports:[OrderService,MongooseModule]
})
export class OrderModule {}
