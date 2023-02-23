import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatCheckboxChange} from "@angular/material/checkbox";

@Component({
  selector: 'app-component-entry-general-info',
  templateUrl: './component-entry-general-info.component.html',
  styleUrls: ['./component-entry-general-info.component.scss']
})
export class ComponentEntryGeneralInfoComponent implements AfterViewInit{
  clients: Client[] = [{value: 0, name: 'Bavaria'}, {value: 0, name: 'Camaguey'}];
  componentType: ComponentType[] = [
    {value: 0, name: 'Motor A/C'}, {value: 0, name: 'Motor DC'},
    {value: 0, name: 'Bomba sumergible'}, {value: 0, name: 'Generador'},
    {value: 0, name: 'Motor 1PH'}, {value: 0, name: 'Bomba centrifuga'}
  ]
  inventory: ComponentInventory[] = [
    {value: 0, name: 'Estator'}, {value: 0, name: 'Rotor'}, {value: 0, name: 'Caperuza'}
  ]
  @Input()
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.inventory.forEach(() => this.inventoryField.push(this.buildInventoryForm()))
  }
  ngAfterViewInit(): void {

  }



  get inventoryField(){
    return this.form.get('inventory') as FormArray;
  }
  buildInventoryForm(){
    return this.formBuilder.group({
      name: ['', Validators.required],
      checked: ['', Validators.required]
    })
  }


  setChecked(inventory: ComponentInventory, $event: MatCheckboxChange, i: number) {
    let fieldAt = this.inventoryField.at(i);
    if ($event.checked){
      fieldAt.get('name')?.setValue(inventory.name);
      fieldAt.get('checked')?.setValue($event.checked);
    }else {
      fieldAt.reset();
    }

  }
}

interface Client {
  value: number;
  name: string;
}
interface ComponentType {
  value: number;
  name: string;
}

interface ComponentInventory {
  value: number;
  name: string;
}
