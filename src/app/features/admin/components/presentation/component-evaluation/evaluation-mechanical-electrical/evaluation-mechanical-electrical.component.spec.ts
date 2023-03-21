import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationMechanicalElectricalComponent } from './evaluation-mechanical-electrical.component';

describe('EvaluationMechanicalElectricalComponent', () => {
  let component: EvaluationMechanicalElectricalComponent;
  let fixture: ComponentFixture<EvaluationMechanicalElectricalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationMechanicalElectricalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluationMechanicalElectricalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
