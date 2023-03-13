import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { CreateUser } from './createuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  get(){
    return this.http.get<User[]>('http://localhost:3000/api/user')
  }
  create(user:CreateUser){
    return this.http.post('http://localhost:3000/api/user',user)
  }
}
