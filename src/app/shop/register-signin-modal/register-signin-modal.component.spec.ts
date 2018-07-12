import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSigninModalComponent } from './register-signin-modal.component';

describe('RegisterSigninModalComponent', () => {
  let component: RegisterSigninModalComponent;
  let fixture: ComponentFixture<RegisterSigninModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterSigninModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSigninModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
