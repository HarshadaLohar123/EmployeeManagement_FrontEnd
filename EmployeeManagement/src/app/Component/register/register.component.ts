import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/Services/AdminService/admin.service';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  actionBtn:string="Save";
  hide = true;
  token:any;
  employeeId:any;
 
  constructor(private formBuilder:FormBuilder,private admin:AdminService, 
  @Inject(MAT_DIALOG_DATA) public editData:any,
  private dialogRef:MatDialogRef<RegisterComponent>) { }

  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      FirstName :['',Validators.required],
      LastName:['',Validators.required],
      Email:['',Validators.required],
      Password:['', [Validators.required, Validators.minLength(6)]],
      EmpAddress :['',Validators.required],
      Gender:['',Validators.required],
      DateOfBirth :['',Validators.required],
      Position:['',Validators.required],
      Salary:['',Validators.required],
      PhoneNumber:['',Validators.required],
     });
     console.log(this.editData);

    if (this.editData) {
      this.actionBtn = "update";
      this.registerForm.controls['FirstName'].setValue(this.editData.firstName);
      this.registerForm.controls['LastName'].setValue(this.editData.lastName);
      this.registerForm.controls['Email'].setValue(this.editData.email);
      this.registerForm.controls['Password'].setValue(this.editData.password);
      this.registerForm.controls['EmpAddress'].setValue(this.editData.empAddress);
      this.registerForm.controls['Gender'].setValue(this.editData.gender);
      this.registerForm.controls['DateOfBirth'].setValue(this.editData.dateOfBirth);
      this.registerForm.controls['Position'].setValue(this.editData.position);
      this.registerForm.controls['Salary'].setValue(this.editData.salary);
      this.registerForm.controls['PhoneNumber'].setValue(this.editData.phoneNumber);
    }
  }
  registerEmployee() {
    console.log(this.registerForm.value);
    if (!this.editData) {
      if (this.registerForm.valid) {
        this.admin.Register(this.registerForm.value)
          .subscribe({
            next: (res) => {
              alert("Employee Added Successfully");
              this.registerForm.reset();
              this.dialogRef.close("save");
            },
            error: () => {
              alert("Error While Adding the Employee record");
            }
          })
      }
    }
    else {
      this.updateEmployee()
    }

  }
  updateEmployee() {
    this.admin.updateEmployee(this.registerForm.value, this.editData.employeeId).subscribe({
      next: (res) => {
        alert("Employee updated Successfully!!!");
        this.registerForm.reset();
        this.dialogRef.close("update");
      },
      error: () => {
        alert("Error While updating the Employee record");
      }
    })
  }
}
