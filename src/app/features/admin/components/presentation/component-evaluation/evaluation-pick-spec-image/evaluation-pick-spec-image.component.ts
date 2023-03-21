import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {Image} from "../../../../model/interface/Image";

@Component({
  selector: 'app-evaluation-pick-spec-image',
  templateUrl: './evaluation-pick-spec-image.component.html',
  styleUrls: ['./evaluation-pick-spec-image.component.scss']
})
export class EvaluationPickSpecImageComponent {
  form!: FormGroup;
  images: Image[] = [];

  specCode!: string;

  constructor(private formBuilder: FormBuilder) {
  }

  setSelected(image: Image) {
    if (this.specCode){
      let find = this.imagesField.controls.find(img => img.get('code')?.value == this.specCode);
      if (find){
        find.get('name')?.setValue(image.name);
        find.get('blob')?.setValue(image.blob)
      }else {
        this.imagesField.push(this.buildImageField(this.specCode, image.name, image.blob));
      }

    }
  }

  get imagesField(){
    return this.form.get('images') as FormArray;
  }

  buildImageField(code: string, name: string, blob: string){
    return this.formBuilder.group({
      code: [code],
      name: [name],
      blob: [blob]
    })
  }
}
