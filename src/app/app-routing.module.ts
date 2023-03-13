import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlluserComponent } from './alluser/alluser.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [  {path: '', component: HomeComponent},
{path: 'login', component: LoginComponent},
{path: 'register', component: RegisterComponent},
{path:'alluser',component:AlluserComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
