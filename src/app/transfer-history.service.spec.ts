import { TestBed } from '@angular/core/testing';

import { TransferHistoryService } from './transfer-history.service';

describe('TransferHistoryService', () => {
  let service: TransferHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
