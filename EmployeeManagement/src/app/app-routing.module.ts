import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeedetailsComponent } from './Component/employeedetails/employeedetails.component';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:"/home",pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'employeelogin',component:EmployeeloginComponent},
  {path:'employeedetails',component:EmployeedetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
