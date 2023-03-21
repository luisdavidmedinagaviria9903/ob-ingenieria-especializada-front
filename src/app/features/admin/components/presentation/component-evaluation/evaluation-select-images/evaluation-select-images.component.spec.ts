import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationSelectImagesComponent } from './evaluation-select-images.component';

describe('EvaluationSelectImagesComponent', () => {
  let component: EvaluationSelectImagesComponent;
  let fixture: ComponentFixture<EvaluationSelectImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationSelectImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluationSelectImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
