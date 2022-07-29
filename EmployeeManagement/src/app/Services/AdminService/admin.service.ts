import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../HttpService/http.service';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  token: any;
  employeeId: any;
  constructor(private httpservice: HttpService) {
    this.token = localStorage.getItem('token');
  }

  Register(reqdata: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    console.log(reqdata);
    return this.httpservice.postservices('Employee/AddEmployee', reqdata, true, header)
  }

  login(reqdata: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    }
    console.log(reqdata);
    return this.httpservice.postservices(`Admin/AdminLogin`, reqdata, false, header)
  }

  getallEmployee() {
   
    console.log(this.token);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' +this.token
      })
    }
    console.log(this.token);
    return this.httpservice.getService(`Employee/GetAllEmployee`, true, header)
  }

  delete(EmployeeId: any) {
    console.log(EmployeeId);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token,
      }),
    };
    return this.httpservice.deleteService(`Employee/DeleteEmployee/${EmployeeId}`, true, header);
  }

  updateEmployee(data: any, EmployeeId: any) {
    console.log(this.token);
    console.log(data, EmployeeId);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    console.log(data, EmployeeId);
    return this.httpservice.putservices(`Employee/UpdateEmployee/${EmployeeId}`, data, true, header);
  }

  employeelogin(reqdata: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    }
    console.log(reqdata);
    return this.httpservice.postservices(`EmployeeRole/EmployeeLogin`, reqdata, false, header)
  }
}
