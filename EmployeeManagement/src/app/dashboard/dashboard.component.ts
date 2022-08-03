import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterComponent } from '../Component/register/register.component';
import { AdminService } from '../Services/AdminService/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dataSource: any = [];
  token: any;
  constructor(private dialog: MatDialog, private adminservice: AdminService,private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.token = localStorage.getItem("token");
    this.getAllEmployee();
  }
  openDialog() {
    this.dialog.open(RegisterComponent, {
      width: '32%',
      height: '75%',
    }).afterClosed().subscribe(val => {
      this.router.routeReuseStrategy.shouldReuseRoute=()=>false;
      this.router.onSameUrlNavigation="reload";
      this.router.navigate(["./dashboard"]),{
        relativeTo:this.route
      }
      if (val === 'Save') {
        this.getAllEmployee();
      }
    })
  }

  getAllEmployee() {
    this.adminservice.getallEmployee().subscribe(
      (response: any) => {
        console.log(response);
        this.dataSource = response.response.reverse();
        console.log(this.dataSource);
      })
  }

  delete(data: any) {
    this.adminservice.delete(data.employeeId).subscribe(res => {
      alert("Employee Deleted Successfully")
      this.getAllEmployee();
    })
  }

  updateEmployee(arr: any) {
    this.dialog.open(RegisterComponent, {
      width: '34%',
      height: '75%',
      data: arr
    }).afterClosed().subscribe(val => {
      if (val === 'update') {
        this.getAllEmployee();
      }
    })
  }
}
