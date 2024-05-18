import { TestBed } from '@angular/core/testing';

import { NgxLibmodalService } from './ngx-libmodal.service';

describe('NgxLibmodalService', () => {
  let service: NgxLibmodalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxLibmodalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
