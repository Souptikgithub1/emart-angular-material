import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProductPriceComponent } from './manage-product-price.component';

describe('ManageProductPriceComponent', () => {
  let component: ManageProductPriceComponent;
  let fixture: ComponentFixture<ManageProductPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageProductPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProductPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
