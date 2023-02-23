import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentEntryMainComponent } from './component-entry-main.component';

describe('ComponentEntryMainComponent', () => {
  let component: ComponentEntryMainComponent;
  let fixture: ComponentFixture<ComponentEntryMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentEntryMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentEntryMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
