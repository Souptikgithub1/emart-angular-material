import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RvpComponent } from './rvp.component';

describe('RvpComponent', () => {
  let component: RvpComponent;
  let fixture: ComponentFixture<RvpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RvpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RvpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
