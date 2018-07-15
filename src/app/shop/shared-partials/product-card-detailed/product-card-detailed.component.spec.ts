import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardDetailedComponent } from './product-card-detailed.component';

describe('ProductCardDetailedComponent', () => {
  let component: ProductCardDetailedComponent;
  let fixture: ComponentFixture<ProductCardDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCardDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
