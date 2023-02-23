import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentEntryUploadImageComponent } from './component-entry-upload-image.component';

describe('ComponentEntryUploadImageComponent', () => {
  let component: ComponentEntryUploadImageComponent;
  let fixture: ComponentFixture<ComponentEntryUploadImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentEntryUploadImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentEntryUploadImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
