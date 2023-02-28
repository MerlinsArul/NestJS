import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateOrUpdateStudent } from '../create-or-update-student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit{
  
  constructor(private route:ActivatedRoute , private studentservice:StudentService,
    private router:Router){}

  itemId:string ='';

  student:CreateOrUpdateStudent={
    name: '',
    rollnumber: 0,
    course: '',
    gender: ''
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
     this.itemId = params.get('id') ?? '';
     this.getbyId();
    })
  }
  getbyId(){
     this.studentservice.getById(this.itemId).subscribe((data)=>{
      this.student.name=data.name;
     this.student.course=data.course;
     this.student.rollnumber=data.rollnumber;
    this.student.gender=data.gender
     })
  }

  update(){
    this.studentservice.update(this.itemId,this.student).subscribe((data)=>{
      console.log(data);
      
   this.router.navigate(['/'])
    })
  }
}
