import {Component, Input} from '@angular/core';
import {
  ComponentEvaluationInventorySpecsDto
} from "../../../../model/dto/read/component-evaluation-inventory-specs.dto";
import {FormArray, FormGroup} from "@angular/forms";
import {MiscTypeDto} from "../../../../model/dto/read/miscType.dto";
import {MatCheckboxChange} from "@angular/material/checkbox";
import {MatSelectChange} from "@angular/material/select";

@Component({
  selector: 'app-evaluation-inventory',
  templateUrl: './evaluation-inventory.component.html',
  styleUrls: ['./evaluation-inventory.component.scss']
})
export class EvaluationInventoryComponent {
  @Input()
  form!: FormGroup;

  @Input()
  specifications: ComponentEvaluationInventorySpecsDto[] = [];

  @Input()
  inventoryStatus: MiscTypeDto[] = [];

  constructor() {
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

  get inventoryField(){
    return this.form.get('evaluationInventory') as FormArray;
  }
}
