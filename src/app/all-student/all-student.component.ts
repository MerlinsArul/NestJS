import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

declare var window:any;

@Component({
  selector: 'app-all-student',
  templateUrl: './all-student.component.html',
  styleUrls: ['./all-student.component.css'],
})
export class AllStudentComponent implements OnInit {
  constructor(private studentservice: StudentService) {}

  student: Student[] = [];
  deleteModal:any;
  itemToDelete:string=''

  ngOnInit(): void {
   this.deleteModal = new window.bootstrap.Modal(
    document.getElementById("deleteModal")
   )
    this.getAll();
   }

   openDeletePopup(_id:string){
     this.itemToDelete=_id;
     this.deleteModal.show();
   }

  getAll() {
    this.studentservice.get().subscribe((data) => {
      this.student = data;
    });
  }

  deleteItem(){
    this.studentservice.delete(this.itemToDelete).subscribe((data)=>{
      console.log(data);
      this.student = this.student.filter(_ => _._id !==this.itemToDelete)
       this.deleteModal.hide();
    })
  }
}
