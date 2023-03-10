import { TestBed } from '@angular/core/testing';

import { MiscTypeService } from './misc-type.service';

describe('MiscTypeService', () => {
  let service: MiscTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiscTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
