import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationObservationsComponent } from './evaluation-observations.component';

describe('EvaluationObservationsComponent', () => {
  let component: EvaluationObservationsComponent;
  let fixture: ComponentFixture<EvaluationObservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationObservationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluationObservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
