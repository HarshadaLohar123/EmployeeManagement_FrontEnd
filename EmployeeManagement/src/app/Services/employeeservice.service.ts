import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './HttpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
  employeetoken: any;
  constructor(private httpservice: HttpService) { }

  employeelogin(reqdata: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    }
    return this.httpservice.postservices(`EmployeeRole/EmployeeLogin`, reqdata, false, header)
  }

  getEmployeeDetail() {
    this.employeetoken = localStorage.getItem('employeetoken');
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.employeetoken
      }),
    };
    return this.httpservice.getService(`EmployeeRole/GetEmployeeDetail`, true, header);
  }
}
