import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { Createcustomdto } from './create-customer.dto';
import { Customer } from './customer.entity';
import { CustomersService } from './customers.service';

@Controller('')
export class CustomersController {

    constructor(private customerservice:CustomersService){}

    @Get()
    getCustomers(@Query('name')name:string):Customer[]{
        return this.customerservice.findAll(name)
    }

    @Get(':id')
    getCustomerbyID(@Param('id',ParseIntPipe) id:number) {
        console.log(typeof(id));
        
       const customer =  this.customerservice.findById(Number(id));
       if(!customer){
        throw new NotFoundException
        
       }
       return customer
    }

    @Post()
    createCustomer(@Body() body:Createcustomdto){
        return this.customerservice.createCustomer(body)
    }
}
