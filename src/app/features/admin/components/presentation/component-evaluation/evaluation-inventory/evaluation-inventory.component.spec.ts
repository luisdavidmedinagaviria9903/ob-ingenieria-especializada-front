import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationInventoryComponent } from './evaluation-inventory.component';

describe('EvaluationInventoryComponent', () => {
  let component: EvaluationInventoryComponent;
  let fixture: ComponentFixture<EvaluationInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationInventoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluationInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
