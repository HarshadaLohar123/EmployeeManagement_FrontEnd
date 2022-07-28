import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../Component/register/register.component';
import { AdminService } from '../Services/AdminService/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dataSource:any = [];
  constructor(private dialog:MatDialog,private admin:AdminService) { }

  ngOnInit(): void {
   this.getAllEmployee();

  }
  openDialog() {
    this.dialog.open(RegisterComponent, {
    width:'32%',
    height:'75%',
    }).afterClosed().subscribe(val=>{
      if(val ==='Save'){
        this.getAllEmployee();
      }
    })
  }

  getAllEmployee(){
    this.admin.getallEmployee().subscribe(
      (response:any)=>{
        console.log(response);
       this.dataSource = response.response;
       console.log(this.dataSource);
      })
  }

  delete(data:any){
    this.admin.delete(data.employeeId).subscribe(res=>{
      alert("Employee Deleted Successfully")
      this.getAllEmployee();
    })
  }

  updateEmployee(arr:any){
    this.dialog.open(RegisterComponent,{
      width:'34%',
      height:'75%',
      data:arr
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.getAllEmployee();
      }
    })
  }
  
}
