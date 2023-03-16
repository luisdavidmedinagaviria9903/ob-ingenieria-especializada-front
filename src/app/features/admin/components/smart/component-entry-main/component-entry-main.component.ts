import {Component, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ComponentEntryDto} from "../../../model/dto/component-entry.dto";
import {UserDto} from "../../../model/dto/user.dto";
import {ComponentDto} from "../../../model/dto/component.dto";
import {ComponentEntryInventoryDto} from "../../../model/dto/component-entry-inventory.dto";
import {ComponentEntryPicturesDto} from "../../../model/dto/component-entry-pictures.dto";
import {
  CONTACT_SUPPORT,
  INVALID_OR_MISSING_FIELDS,
  show_popup,
  TITLE_ERROR,
  TITLE_INFO, TITLE_SUCCESS
} from "../../../../shared/popup-alert";
import {MatStepper} from "@angular/material/stepper";
import {ComponentEntryService} from "../../../service/component/component-entry.service";
import {DateUtil} from "../../../../shared/dateUtil";
import {ComponentService} from "../../../service/component/component.service";

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

  @ViewChild('stepper')
  private myStepper!: MatStepper;

  constructor(private formBuilder: FormBuilder,
              private componentEntryService: ComponentEntryService,
              private componentService: ComponentService) {
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

  saveEntry(){
    if (this.generalInfoForm.invalid || this.observationsForm.invalid || this.files.length <= 0){
      show_popup(TITLE_INFO, INVALID_OR_MISSING_FIELDS).then(() => this.myStepper.selectedIndex = 0)
      return;
    }
    let component = new ComponentDto();
    let componentEntry = new ComponentEntryDto();
    let client = new UserDto();
    let componentInventory: ComponentEntryInventoryDto[] = [];
    let componentPictures: ComponentEntryPicturesDto[] = [];

    client.id = this.clientField?.value;
    componentEntry.client = client;
    componentEntry.observation = this.observationField?.value;
    componentEntry.entryDate = DateUtil.addHourToDate(this.dateField?.value, this.hourField?.value)

    component.type = this.componentTypeField?.value;
    //TODO: User must be authenticated
    component.creationUser = "1";

    this.inventoryField.controls.forEach(item => {
      let itemChecked = item.get('checked')?.value;
      if (itemChecked){
        let inventoryObject = new ComponentEntryInventoryDto();
        inventoryObject.code = item.get('code')?.value;
        inventoryObject.value =  itemChecked;
        componentInventory.push(inventoryObject);
      }
    })
    this.files.forEach(file => {
      if (file.checked){
        let picture = new ComponentEntryPicturesDto();
        picture.name = file.name;
        picture.url = file.blob;
        componentPictures.push(picture);
      }

    })
    componentEntry.inventory = componentInventory;
    componentEntry.pictures = componentPictures;
    component.componentEntry = componentEntry;

   this.componentService.saveComponent(component).subscribe({
      next: value => {
          if (value && value.id){
            show_popup(TITLE_SUCCESS, "Registro guardado correctamente").then(() => {
              this.generalInfoForm.reset();
              this.inventoryField.clear();
              this.files = [];
              this.observationsForm.reset();
              this.myStepper.selectedIndex = 0;
            })
          }
      }, error: () => {
        show_popup(TITLE_ERROR, CONTACT_SUPPORT);
      }
    })

    console.log(componentEntry);
  }


  get clientField(){
    return this.generalInfoForm.get('client');
  }
  get observationField(){
    return this.observationsForm.get('observation');
  }
  get dateField(){
    return this.generalInfoForm.get('date');
  }
  get hourField(){
    return this.generalInfoForm.get('hour');
  }
  get componentTypeField(){
    return this.generalInfoForm.get('component_type');
  }

  get inventoryField(){
    return this.generalInfoForm.get('inventory') as FormArray;
  }
}
export interface Image{
  blob: any;
  checked: boolean;
  name: string;
}
