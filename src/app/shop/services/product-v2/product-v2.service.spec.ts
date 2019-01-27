import { TestBed } from '@angular/core/testing';

import { ProductV2Service } from './product-v2.service';

describe('ProductV2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductV2Service = TestBed.get(ProductV2Service);
    expect(service).toBeTruthy();
  });
});
