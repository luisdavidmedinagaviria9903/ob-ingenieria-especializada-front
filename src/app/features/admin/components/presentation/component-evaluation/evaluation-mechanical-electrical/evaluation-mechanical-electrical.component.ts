import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {
  ComponentEvaluationInventorySpecsDto
} from "../../../../model/dto/read/component-evaluation-inventory-specs.dto";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {MatCheckboxChange} from "@angular/material/checkbox";
import {MiscTypeDto} from "../../../../model/dto/read/miscType.dto";
import {MatSelectChange} from "@angular/material/select";

@Component({
  selector: 'app-evaluation-mechanical-electrical',
  templateUrl: './evaluation-mechanical-electrical.component.html',
  styleUrls: ['./evaluation-mechanical-electrical.component.scss']
})
export class EvaluationMechanicalElectricalComponent implements AfterViewInit{

  @Input()
  form!: FormGroup;

  @Input()
  specifications: ComponentEvaluationInventorySpecsDto[] = [];

  @Input()
  inventoryStatus: MiscTypeDto[] = [];

  constructor(private formBuilder: FormBuilder) {
  }

  ngAfterViewInit(): void {

  }


  get inventoryField(){
    return this.form.get('mechanicalEvaluation') as FormArray;
  }

  setChecked($event: MatCheckboxChange, i: number) {
    let fieldAt = this.inventoryField.at(i);
    if (fieldAt){
      fieldAt.get('checked')?.setValue($event.checked);
      fieldAt.get('state')?.reset();
    }


  }

  isSpecChecked(i: number) {
    return this.inventoryField.at(i)?.get('checked');
  }

  setStatus($event: MatSelectChange, i: number) {
    let fieldAt = this.inventoryField.at(i);
    if (fieldAt){
      fieldAt.get('state')?.setValue($event.value);
    }
  }
}
