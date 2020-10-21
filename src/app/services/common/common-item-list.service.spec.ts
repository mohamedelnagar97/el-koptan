import { TestBed } from '@angular/core/testing';

import { CommonItemListService } from './common-item-list.service';

describe('CommonItemListService', () => {
  let service: CommonItemListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonItemListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
