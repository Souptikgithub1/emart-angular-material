import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailedCardSkeletonComponent } from './product-detailed-card-skeleton.component';

describe('ProductDetailedCardSkeletonComponent', () => {
  let component: ProductDetailedCardSkeletonComponent;
  let fixture: ComponentFixture<ProductDetailedCardSkeletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailedCardSkeletonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailedCardSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
