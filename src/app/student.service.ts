import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateOrUpdateStudent } from './create-or-update-student';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  get(){
    return this.http.get<Student[]>('http://localhost:3000/student')
  }
  create(student:CreateOrUpdateStudent){
    return this.http.post('http://localhost:3000/student',student)
  }

  getById(id:string){
    return this.http.get<Student>(`http://localhost:3000/student/${id}`)
  }

 update(id:string,student:CreateOrUpdateStudent){
  return this.http.put(`http://localhost:3000/student/${id}`,student)
 }
}
