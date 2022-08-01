import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/Services/AdminService/admin.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  actionBtn: string = "Save";
  hide = true;
  token: any;
  employeeId: any;

  constructor(private formBuilder: FormBuilder, private adminservice: AdminService,
    @Inject(MAT_DIALOG_DATA) public updateData: any,
    private dialogRef: MatDialogRef<RegisterComponent>) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Email: ['', Validators.required],
      Password: ['', [Validators.required, Validators.minLength(6)]],
      EmpAddress: ['', Validators.required],
      Gender: ['', Validators.required],
      DateOfBirth: ['', Validators.required],
      Position: ['', Validators.required],
      Salary: ['', Validators.required],
      PhoneNumber: ['', Validators.required],
    });
    console.log(this.updateData);

    if (this.updateData) {
      this.actionBtn = "update";
      this.registerForm.controls['FirstName'].setValue(this.updateData.firstName);
      this.registerForm.controls['LastName'].setValue(this.updateData.lastName);
      this.registerForm.controls['Email'].setValue(this.updateData.email);
      this.registerForm.controls['Password'].setValue(this.updateData.password);
      this.registerForm.controls['EmpAddress'].setValue(this.updateData.empAddress);
      this.registerForm.controls['Gender'].setValue(this.updateData.gender);
      this.registerForm.controls['DateOfBirth'].setValue(this.updateData.dateOfBirth);
      this.registerForm.controls['Position'].setValue(this.updateData.position);
      this.registerForm.controls['Salary'].setValue(this.updateData.salary);
      this.registerForm.controls['PhoneNumber'].setValue(this.updateData.phoneNumber);
    }
  }
  registerEmployee() {
    console.log(this.registerForm.value);
    if (!this.updateData) {
      if (this.registerForm.valid) {
        this.adminservice.Register(this.registerForm.value)
          .subscribe({
            next: (res) => {
              alert("Employee Registered Sucessfully");
              this.registerForm.reset();
              this.dialogRef.close("save");
            },
            error: () => {
              alert("Error..While Adding the Employee record");
            }
          })
      }
    }
    else {
      this.updateEmployee()
    }

  }
  updateEmployee() {
    this.adminservice.updateEmployee(this.registerForm.value, this.updateData.employeeId).subscribe({
      next: (res) => {
        alert("Employee updated Successfully!!!");
        this.registerForm.reset();
        this.dialogRef.close("update");
      },
      error: () => {
        alert("Sorry!Enter Valid Employee Id");
      }
    })
  }
}
