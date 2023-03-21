import {Component, Input} from '@angular/core';
import {FormArray, FormGroup} from "@angular/forms";
import {Image} from "../../../../model/interface/Image";
import {MatDialog} from "@angular/material/dialog";
import {EvaluationPickSpecImageComponent} from "../evaluation-pick-spec-image/evaluation-pick-spec-image.component";

@Component({
  selector: 'app-evaluation-select-images',
  templateUrl: './evaluation-select-images.component.html',
  styleUrls: ['./evaluation-select-images.component.scss']
})
export class EvaluationSelectImagesComponent {
  @Input()
  evaluationMechanicalForm!: FormGroup;
  @Input()
  evaluationInventoryForm!: FormGroup;
  @Input()
  form!: FormGroup;

  @Input()
  images: Image[] = [];

  constructor(private matDialog: MatDialog) {
  }


  get evaluationMechanicalInventoryField(){
    return this.evaluationMechanicalForm.get('mechanicalEvaluation') as FormArray;
  }
  get evaluationInventoryField(){
    return this.evaluationInventoryForm.get('evaluationInventory') as FormArray;
  }

  get imagesField(){
    return this.form.get('images') as FormArray;
  }

  selectImage(code: string){
    let dialog = this.matDialog.open(EvaluationPickSpecImageComponent,  {
      width: "90%",
      height: "80%"
    });
    dialog.componentInstance.images = this.images;
    dialog.componentInstance.form = this.form;
    dialog.componentInstance.specCode = code;
  }
  isImageUploaded(code: string){
    return this.imagesField.controls.find(img => img.get('code')?.value === code);
  }
}
