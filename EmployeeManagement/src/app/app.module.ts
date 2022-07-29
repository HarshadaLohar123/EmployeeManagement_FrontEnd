import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './Component/register/register.component';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { EmployeedetailsComponent } from './Component/employeedetails/employeedetails.component';
import {MatExpansionModule} from '@angular/material/expansion';
 
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    EmployeeloginComponent,
    EmployeedetailsComponent
  ],
  imports: [
    BrowserModule,FlexLayoutModule,MatSnackBarModule,MatExpansionModule,
    AppRoutingModule,MatInputModule,MatCheckboxModule,MatToolbarModule,MatIconModule,FormsModule,MatSelectModule,
    BrowserAnimationsModule,MatFormFieldModule,ReactiveFormsModule,MatRadioModule,MatButtonModule,HttpClientModule,MatDialogModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
