import { TestBed, inject } from '@angular/core/testing';

import { ProductFeatureNamesService } from './product-feature-names.service';

describe('ProductFeatureNamesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductFeatureNamesService]
    });
  });

  it('should be created', inject([ProductFeatureNamesService], (service: ProductFeatureNamesService) => {
    expect(service).toBeTruthy();
  }));
});
