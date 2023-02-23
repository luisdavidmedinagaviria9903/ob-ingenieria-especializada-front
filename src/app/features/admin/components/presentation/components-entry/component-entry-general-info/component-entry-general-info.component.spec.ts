import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentEntryGeneralInfoComponent } from './component-entry-general-info.component';

describe('ComponentEntryGeneralInfoComponent', () => {
  let component: ComponentEntryGeneralInfoComponent;
  let fixture: ComponentFixture<ComponentEntryGeneralInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentEntryGeneralInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentEntryGeneralInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
