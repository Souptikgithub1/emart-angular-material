import { TestBed, inject } from '@angular/core/testing';

import { ProductFeatureCategoryService } from './product-feature-category.service';

describe('ProductFeatureCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductFeatureCategoryService]
    });
  });

  it('should be created', inject([ProductFeatureCategoryService], (service: ProductFeatureCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
