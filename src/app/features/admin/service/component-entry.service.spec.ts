import { TestBed } from '@angular/core/testing';

import { ComponentEntryService } from './component-entry.service';

describe('ComponentEntryService', () => {
  let service: ComponentEntryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentEntryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
