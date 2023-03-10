import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentEntryListComponent } from './component-entry-list.component';

describe('ComponentEntryListComponent', () => {
  let component: ComponentEntryListComponent;
  let fixture: ComponentFixture<ComponentEntryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentEntryListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentEntryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
