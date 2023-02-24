import { Injectable } from '@nestjs/common';
import { User } from 'src/user/user.interface';
import { Createcustomdto } from './create-customer.dto';
import { Customer } from './customer.entity';

@Injectable()
export class CustomersService {
    private customers:Customer[] = [{id:1,name:"Merlins"},{id:0,name:"Maha"}]

    findAll(name?:string):Customer[]{
        if(name){
          return this.customers.filter(customer => customer.name === name)  
        }
        return this.customers;
    }

    findById(customerId:number):Customer{
         return this.customers.find(customer=>customer.id === customerId) 
    }

    createCustomer(createcustomdto:Createcustomdto):Customer{
        const newCustomer = {id:Date.now(),...createcustomdto};
        this.customers.push(newCustomer);
        return newCustomer;
    }
}
