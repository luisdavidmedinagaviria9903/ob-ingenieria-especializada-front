import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatCheckboxChange} from "@angular/material/checkbox";
import {ComponentTypeDto} from "../../../../model/dto/read/componentType.dto";
import {ComponentEntryService} from "../../../../service/component/component-entry.service";
import {ComponentEntryTypeSpecsDto} from "../../../../model/dto/read/component-entry-type-specs.dto";
import {UserDto} from "../../../../model/dto/read/user.dto";
import {UserService} from "../../../../service/user.service";
import {ComponentService} from "../../../../service/component/component.service";

@Component({
  selector: 'app-component-entry-general-info',
  templateUrl: './component-entry-general-info.component.html',
  styleUrls: ['./component-entry-general-info.component.scss']
})
export class ComponentEntryGeneralInfoComponent implements OnInit{
  clients: UserDto[] = [];
  componentType: ComponentTypeDto[] = [];
  inventory: ComponentEntryTypeSpecsDto[] = []


  @Input()
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private componentEntryService: ComponentEntryService,
              private componentService: ComponentService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getAllClients()
      .subscribe(resultClients => (this.clients = resultClients));
    this.componentService.getAllComponentType()
      .subscribe(result => (this.componentType = result));
  }



  getSpecs($event: any) {
    console.log($event)
    this.componentEntryService.getAllComponentEntrySpecsInventory($event)
      .subscribe(result => {
        this.inventoryField.clear();
        this.inventory = result;
        result.forEach(() => this.inventoryField.push(this.buildInventoryForm()));
      });
  }


  get inventoryField(){
    return this.form.get('inventory') as FormArray;
  }
  buildInventoryForm(){
    return this.formBuilder.group({
      code: [''],
      name: [''],
      checked: ['']
    })
  }


  setChecked(inventory: ComponentEntryTypeSpecsDto, $event: MatCheckboxChange, i: number) {
    let fieldAt = this.inventoryField.at(i);
    if ($event.checked){
      fieldAt.get('code')?.setValue(inventory.componentSpec.code)
      fieldAt.get('name')?.setValue(inventory.componentSpec.description);
      fieldAt.get('checked')?.setValue($event.checked);
    }else {
      fieldAt.reset();
    }

  }


}
