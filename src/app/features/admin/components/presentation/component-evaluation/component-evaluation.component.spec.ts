import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentEvaluationComponent } from './component-evaluation.component';

describe('ComponentEvaluationComponent', () => {
  let component: ComponentEvaluationComponent;
  let fixture: ComponentFixture<ComponentEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentEvaluationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
