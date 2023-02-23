import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentEntryPreviewComponent } from './component-entry-preview.component';

describe('ComponentEntryPreviewComponent', () => {
  let component: ComponentEntryPreviewComponent;
  let fixture: ComponentFixture<ComponentEntryPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentEntryPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentEntryPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
