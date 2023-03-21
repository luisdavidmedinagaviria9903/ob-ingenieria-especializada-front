import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationPickSpecImageComponent } from './evaluation-pick-spec-image.component';

describe('EvaluationPickSpecImageComponent', () => {
  let component: EvaluationPickSpecImageComponent;
  let fixture: ComponentFixture<EvaluationPickSpecImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationPickSpecImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluationPickSpecImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
