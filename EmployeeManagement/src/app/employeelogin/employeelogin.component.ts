import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../Services/AdminService/admin.service';

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.scss']
})
export class EmployeeloginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted=false;

  constructor(private formBuilder: FormBuilder,private admin:AdminService) { }

  ngOnInit(): void {
     this.loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    
});
  }
  onSubmit()
  {
    this.submitted=true;
    if(this.loginForm.valid){
      console.log("Login Successfully",this.loginForm.value);
      let reqData={
        email:this.loginForm.value.email,
        password:this.loginForm.value.password
      }
      this.admin.login(reqData).subscribe((result:any)=>{
        console.log(result);
        // localStorage.setItem('token',result.token); 
        // this.router.navigateByUrl('/dashboard')  
      
      })
      
    }
    else{
      console.log("invalid data",this.loginForm.value);
    }
    // this.snackBar.open('Login Successfully..!!!', '..', {
    //   duration: 3000,
    // })

    
  }


}
