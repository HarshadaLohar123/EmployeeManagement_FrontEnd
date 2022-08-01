import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeserviceService } from 'src/app/Services/employeeservice.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.scss']
})
export class EmployeedetailsComponent implements OnInit {
  panelOpenState = false;
  EmpId: any;
  token: any;
  employeeArray: any = [];

  constructor(private employee: EmployeeserviceService, private snack: MatSnackBar) {
    this.token = localStorage.getItem("token");
  }

  ngOnInit(): void {
    this.getEmployeeDetails();
  }
  getEmployeeDetails() {
    let reqdata = {
      empId: this.EmpId
    };
    this.employee.getEmployeeDetail().subscribe((response: any) => {
      console.log(response);
      this.employeeArray = response.response;
      console.log(this.employeeArray);
      this.snack.open('Get Employee detail Successful', '', {
        duration: 3000,
      })
    });
  }
}
