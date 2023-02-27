import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { AllStudentComponent } from './all-student/all-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';

const routes: Routes = [
  {path:'',component:AllStudentComponent},
  {path:'add-student',component:AddStudentComponent},
  {path:'edit-student/:id',component:EditStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
