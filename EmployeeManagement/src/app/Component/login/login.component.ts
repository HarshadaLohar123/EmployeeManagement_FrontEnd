import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Services/AdminService/admin.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  token: any;

  constructor(private formBuilder: FormBuilder, private adminservice: AdminService, private router: Router, private snack: MatSnackBar) {
    this.token = localStorage.getItem("token");
  }
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
      this.adminservice.login(reqData).subscribe((result: any) => {
        console.log(result);
        localStorage.setItem("token", result.data.token);
        this.snack.open('Login Successfully..!!!', '..', {
          duration: 3000,
        })
        this.router.navigateByUrl('/dashboard');
      })
    }
    else {
      console.log("invalid data", this.loginForm.value);
    }
  }
}
