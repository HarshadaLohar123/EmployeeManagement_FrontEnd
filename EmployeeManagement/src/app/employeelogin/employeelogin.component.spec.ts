import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { EmployeeloginComponent } from './employeelogin.component';

describe('Employeelogin', () => {
  let component: EmployeeloginComponent;
  let fixture: ComponentFixture<EmployeeloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeloginComponent],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientModule,
        MatSnackBarModule
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a Emp login component', () => {
    expect(component).toBeTruthy();
  });

  it('should contain component Employee Login', () => {
    expect(component.loginForm).toBeTruthy();
  });

  it('should contain login form of default value', () => {
    expect(component.loginForm.value).toEqual({ email: '', password: '' });
  });

});