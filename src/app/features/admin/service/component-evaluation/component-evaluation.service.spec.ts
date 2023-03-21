import { TestBed } from '@angular/core/testing';

import { ComponentEvaluationService } from './component-evaluation.service';

describe('ComponentEvaluationService', () => {
  let service: ComponentEvaluationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentEvaluationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
