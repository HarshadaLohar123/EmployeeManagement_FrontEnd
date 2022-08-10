import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeserviceService } from './employeeservice.service';

describe('EmployeeService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [EmployeeserviceService]
  }));

  it('should be created', () => {
    const service: EmployeeserviceService = TestBed.get(EmployeeserviceService);
    expect(service).toBeTruthy();
  });

  it('should have employeeLogin function', () => {
    const service: EmployeeserviceService = TestBed.get(EmployeeserviceService);
    expect(service.employeelogin).toBeTruthy();
  });

  it('should have EmployeeDetails', () => {
    const service: EmployeeserviceService = TestBed.get(EmployeeserviceService);
    expect(service.getEmployeeDetail).toBeTruthy();
  });
});