import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductFeatureNamesComponent } from './edit-product-feature-names.component';

describe('EditProductFeatureNamesComponent', () => {
  let component: EditProductFeatureNamesComponent;
  let fixture: ComponentFixture<EditProductFeatureNamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProductFeatureNamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductFeatureNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
