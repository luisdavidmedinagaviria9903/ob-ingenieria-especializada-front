import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectEntryComponent } from './select-entry.component';

describe('SelectEntryComponent', () => {
  let component: SelectEntryComponent;
  let fixture: ComponentFixture<SelectEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
