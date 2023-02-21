import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsEntryComponent } from './components-entry.component';

describe('ComponentsEntryComponent', () => {
  let component: ComponentsEntryComponent;
  let fixture: ComponentFixture<ComponentsEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentsEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
