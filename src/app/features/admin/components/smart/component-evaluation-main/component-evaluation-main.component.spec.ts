import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentEvaluationMainComponent } from './component-evaluation-main.component';

describe('ComponentEvaluationMainComponent', () => {
  let component: ComponentEvaluationMainComponent;
  let fixture: ComponentFixture<ComponentEvaluationMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentEvaluationMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentEvaluationMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
