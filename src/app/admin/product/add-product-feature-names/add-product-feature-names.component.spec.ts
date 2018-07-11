import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductFeatureNamesComponent } from './add-product-feature-names.component';

describe('AddProductFeatureNamesComponent', () => {
  let component: AddProductFeatureNamesComponent;
  let fixture: ComponentFixture<AddProductFeatureNamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductFeatureNamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductFeatureNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
