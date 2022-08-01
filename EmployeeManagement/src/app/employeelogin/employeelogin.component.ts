import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from '../Services/AdminService/admin.service';
import { EmployeeserviceService } from '../Services/employeeservice.service';

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.scss']
})
export class EmployeeloginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  token: any;
  constructor(private formBuilder: FormBuilder, private adminservice: AdminService, private router: Router, private snack: MatSnackBar, private employee: EmployeeserviceService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      console.log("Login Successfully", this.loginForm.value);
      let reqData = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      }
      this.employee.employeelogin(reqData).subscribe((result: any) => {
        console.log(result);
        localStorage.setItem('employeetoken',result.token);
        this.snack.open('Login Successfully..!!!', '..', {
          duration: 3000,
        })
        this.router.navigateByUrl('/employeedetails')
      })
    }
    else {
      console.log("invalid data", this.loginForm.value);
    }
  }
}
