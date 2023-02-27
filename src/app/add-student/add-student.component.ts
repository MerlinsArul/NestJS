import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateOrUpdateStudent } from '../create-or-update-student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private studentservice:StudentService,private router:Router){}

  student :CreateOrUpdateStudent = {
    name: '',
    course: '',
    rollnumber:0,
    gender: ''
  }

  ngOnInit():void{}

  create(){
    this.student.rollnumber = Number(this.student.rollnumber)
    console.log(this.student);
    
    this.studentservice.create(this.student).subscribe(()=>{
      this.router.navigate(['/']);
    })
  }
}
