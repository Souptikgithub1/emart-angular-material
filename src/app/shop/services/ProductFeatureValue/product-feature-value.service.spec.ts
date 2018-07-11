import { TestBed, inject } from '@angular/core/testing';

import { ProductFeatureValueService } from './product-feature-value.service';

describe('ProductFeatureValueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductFeatureValueService]
    });
  });

  it('should be created', inject([ProductFeatureValueService], (service: ProductFeatureValueService) => {
    expect(service).toBeTruthy();
  }));
});
