import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { AdminService } from './admin.service';

describe('AdminService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [AdminService]
  }));

  it('should be created', () => {
    const service: AdminService = TestBed.get(AdminService);
    expect(service).toBeTruthy();
  });

  it('should have login function', () => {
    const service: AdminService = TestBed.get(AdminService);
    expect(service.login).toBeTruthy();
  });

  it('should have register function', () => {
    const service: AdminService = TestBed.get(AdminService);
    expect(service.Register).toBeTruthy();
  });

  it('should have delete', () => {
    const service: AdminService = TestBed.get(AdminService);
    expect(service.delete).toBeTruthy();
  });

  it('should have updateEmployee', () => {
    const service: AdminService = TestBed.get(AdminService);
    expect(service.updateEmployee).toBeTruthy();
  });

  it('should have getAllFunction', () => {
    const service: AdminService = TestBed.get(AdminService);
    expect(service.getallEmployee).toBeTruthy();
  });
});