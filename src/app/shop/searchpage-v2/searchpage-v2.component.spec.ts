import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchpageV2Component } from './searchpage-v2.component';

describe('SearchpageV2Component', () => {
  let component: SearchpageV2Component;
  let fixture: ComponentFixture<SearchpageV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchpageV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchpageV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
