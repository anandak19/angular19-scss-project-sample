import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoginOtpComponent } from './admin-login-otp.component';

describe('AdminLoginOtpComponent', () => {
  let component: AdminLoginOtpComponent;
  let fixture: ComponentFixture<AdminLoginOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminLoginOtpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLoginOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
