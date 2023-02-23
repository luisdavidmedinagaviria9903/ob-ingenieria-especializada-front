import {Component, Input, ViewEncapsulation} from '@angular/core';
import {FormArray, FormGroup} from "@angular/forms";
import {Image} from "../../../smart/component-entry-main/component-entry-main.component";
import {DateUtil} from "../../../../../shared/dateUtil";


@Component({
  selector: 'app-component-entry-preview',
  templateUrl: './component-entry-preview.component.html',
  styleUrls: ['./component-entry-preview.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ComponentEntryPreviewComponent {

  @Input()
  generalInfoForm!: FormGroup;
  @Input()
  files!: Image[];
  @Input()
  observationsForm!: FormGroup;



  get clientNameField(){
    return this.generalInfoForm.get('client')
  }
  get dateField(){
    return this.generalInfoForm.get('date')
  }
  get hourField(){
    return this.generalInfoForm.get('hour')
  }
  get componentTypeField(){
    return this.generalInfoForm.get('component_type');
  }
  get inventoryFields(){
    return this.generalInfoForm.get('inventory') as FormArray;
  }
  get observationsField(){
    return this.observationsForm.get('observation');
  }
  formatDate(date: any){
    return DateUtil.formatDate(date, 'yyyy-MM-DD');
  }
}
