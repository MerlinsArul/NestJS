import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { CreateUser } from '../createuser';

@Component({
  selector: 'app-alluser',
  templateUrl: './alluser.component.html',
  styleUrls: ['./alluser.component.css']
})
export class AlluserComponent {
  constructor(private userservice:UserService,private router:Router){}

  user :CreateUser= {

    name: '',
    email: '',
    password:'',
    type: ''
  }

  ngOnInit():void{}

  create(){
   
    console.log(this.user);
    
    this.userservice.create(this.user).subscribe(()=>{
      this.router.navigate(['/']);
    })
  }
}
