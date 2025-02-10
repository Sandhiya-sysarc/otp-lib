import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOtpComponent } from './test-otp.component';

describe('TestOtpComponent', () => {
  let component: TestOtpComponent;
  let fixture: ComponentFixture<TestOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestOtpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
