import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-component-entry-main',
  templateUrl: './component-entry-main.component.html',
  styleUrls: ['./component-entry-main.component.scss']
})
export class ComponentEntryMainComponent {
  generalInfoForm!: FormGroup;
  uploadImageForm!: FormGroup;
  observationsForm!: FormGroup;

  files: Image[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.generalInfoForm = this.buildGeneralInfoForm();
    this.uploadImageForm = this.buildUploadImageForm();
    this.observationsForm = this.buildObservationForm();
  }

  buildGeneralInfoForm(){
    return this.formBuilder.group({
      date: ['', Validators.required],
      hour: [''],
      client: ['', Validators.required],
      component_type: ['', Validators.required],
      inventory: this.formBuilder.array([])
    })
  }
  buildUploadImageForm(){
    return this.formBuilder.group({
      images: this.formBuilder.array([])
    })
  }
  buildObservationForm(){
    return this.formBuilder.group({
      observation: ['']
    })
  }


}
export interface Image{
  blob: any;
  checked: boolean;
  name: string;
}
