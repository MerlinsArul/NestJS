import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit{
  
  constructor(private route:ActivatedRoute , private studentservice:StudentService){}

  itemId:string =''

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
     this.itemId = params.get('id') ?? '';
    })
  }
  getbyId(){
     this.studentservice.getById(this.itemId).subscribe((data)=>{
     
     })
  }
}
