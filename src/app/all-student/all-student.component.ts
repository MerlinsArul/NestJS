import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-all-student',
  templateUrl: './all-student.component.html',
  styleUrls: ['./all-student.component.css'],
})
export class AllStudentComponent implements OnInit {
  constructor(private studentservice: StudentService) {}

  student: Student[] = [];

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.studentservice.get().subscribe((data) => {
      this.student = data;
    });
  }
}
