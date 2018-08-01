import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPageSkeletonComponent } from './product-page-skeleton.component';

describe('ProductPageSkeletonComponent', () => {
  let component: ProductPageSkeletonComponent;
  let fixture: ComponentFixture<ProductPageSkeletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPageSkeletonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPageSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
