import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentEntryObservationsComponent } from './component-entry-observations.component';

describe('ComponentEntryObservationsComponent', () => {
  let component: ComponentEntryObservationsComponent;
  let fixture: ComponentFixture<ComponentEntryObservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentEntryObservationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentEntryObservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
