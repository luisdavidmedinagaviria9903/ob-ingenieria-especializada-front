import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {FormArray, FormGroup} from "@angular/forms";
import {Image} from "../../../smart/component-entry-main/component-entry-main.component";
import {DateUtil} from "../../../../../shared/dateUtil";
import {ComponentEntryDto} from "../../../../model/dto/read/component-entry.dto";
import {ComponentDto} from "../../../../model/dto/read/component.dto";


@Component({
  selector: 'app-component-entry-preview',
  templateUrl: './component-entry-preview.component.html',
  styleUrls: ['./component-entry-preview.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ComponentEntryPreviewComponent implements OnInit {

  @Input()
  generalInfoForm!: FormGroup;
  @Input()
  files!: Image[];
  @Input()
  observationsForm!: FormGroup;

  @Input()
  component!: ComponentDto;



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

  ngOnInit(): void {
    console.log(this.component.componentEntry.inventory)
  }


}
