import {Component, Input, OnInit} from '@angular/core';
import {ComponentDto} from "../../../model/dto/read/component.dto";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ComponentEvaluationService} from "../../../service/component-evaluation/component-evaluation.service";
import {ComponentEvaluationInventorySpecsDto} from "../../../model/dto/read/component-evaluation-inventory-specs.dto";
import {MiscTypeService} from "../../../service/misc-type.service";
import {MiscTypeDto} from "../../../model/dto/read/miscType.dto";
import {SaveComponentEvaluationDto} from "../../../model/dto/write/save-component-evaluation.dto";
import {RWComponentEvaluationDto} from "../../../model/dto/write/r-w-component-evaluation.dto";
import {RWComponentEvaluationInventoryDto} from "../../../model/dto/write/r-w-component-evaluationInventory.dto";
import {CONTACT_SUPPORT, show_popup, TITLE_ERROR, TITLE_SUCCESS} from "../../../../shared/popup-alert";
import {Image} from "../../../model/interface/Image";

@Component({
  selector: 'app-component-evaluation-main',
  templateUrl: './component-evaluation-main.component.html',
  styleUrls: ['./component-evaluation-main.component.scss']
})
export class ComponentEvaluationMainComponent implements OnInit{
  components: ComponentDto[] = [];
  selectEntryForm: FormGroup;

  evaluationMechanicalForm: FormGroup;
  evaluationInventoryForm: FormGroup;

  selectImagesForm: FormGroup;
  observationsForms: FormGroup;

  evaluationInventorySpecs: ComponentEvaluationInventorySpecsDto[] = [];
  evaluationMechanicalSpecs: ComponentEvaluationInventorySpecsDto[] = [];
  inventoryStatus: MiscTypeDto[] = [];

  files: Image[] = [];


  constructor(private formBuilder: FormBuilder,
              private componentEvaluationService: ComponentEvaluationService,
              private miscTypeService: MiscTypeService) {
    this.selectEntryForm = this.formBuilder.group({
      entry: ['', Validators.required]
    })
    this.evaluationMechanicalForm = this.formBuilder.group({
      mechanicalEvaluation: this.formBuilder.array([]),
    })
    this.evaluationInventoryForm =  this.formBuilder.group({
      evaluationInventory: this.formBuilder.array([]),
    })
    this.observationsForms = this.formBuilder.group({
      observations: ['']
    })
    this.selectImagesForm = this.formBuilder.group({
      images: this.formBuilder.array([])
    })
  }

  ngOnInit(): void {
    this.componentEvaluationService.getAllComponentEvaluationSpec()
      .subscribe((response) => {
        if (response.length > 0){
          this.evaluationMechanicalSpecs = response.filter(spec => spec.type === 1);
          this.evaluationInventorySpecs = response.filter(spec => spec.type === 2);
          this.evaluationMechanicalSpecs
            .forEach(spec => this.evaluationMechanicalInventoryField.push(this.buildInventoryForm(spec.code, spec.value)))
          this.evaluationInventorySpecs
            .forEach(spec => this.evaluationInventoryField.push(this.buildInventoryForm(spec.code, spec.value)))

        }
      });

    this.miscTypeService.findByCode('component_evaluation_inventory_spec_status')
      .subscribe((response) => (this.inventoryStatus = response));
  }


  get evaluationMechanicalInventoryField(){
    return this.evaluationMechanicalForm.get('mechanicalEvaluation') as FormArray;
  }
  get evaluationInventoryField(){
    return this.evaluationInventoryForm.get('evaluationInventory') as FormArray;
  }
  buildInventoryForm(code: string, description: string){
    return this.formBuilder.group({
      code: [code],
      description: [description],
      state: [''],
      checked: [false]
    })
  }


  save() {
    let saveComponentEvaluationDto = new SaveComponentEvaluationDto();
    let componentEvaluationDto = new  RWComponentEvaluationDto();
    let componentEvaluationInventory : RWComponentEvaluationInventoryDto[] = [];

    componentEvaluationDto.idComponentEntry = this.entryField?.value.id;
    componentEvaluationDto.idComponent = this.entryField?.value.component.id;

    componentEvaluationDto.observations = this.observationsField?.value;
    componentEvaluationDto.creationUser = '1';

    this.evaluationMechanicalInventoryField.controls
      .forEach(control => {
        if (control.get('checked')?.value){
          let inventory = new RWComponentEvaluationInventoryDto();
          inventory.code = control.get('code')?.value;
          inventory.value = control.get('checked')?.value;
          inventory.status = control.get('state')?.value;
          componentEvaluationInventory.push(inventory);
        }

      })

    this.evaluationInventoryField.controls
      .forEach(control => {
        if (control.get('checked')?.value){
          let inventory = new RWComponentEvaluationInventoryDto();
          inventory.code = control.get('code')?.value;
          inventory.value = control.get('checked')?.value;
          inventory.status = control.get('state')?.value;
          componentEvaluationInventory.push(inventory);
        }
      })

    saveComponentEvaluationDto.componentEvaluationDto = componentEvaluationDto;
    saveComponentEvaluationDto.componentEvaluationInventory = componentEvaluationInventory;

    this.componentEvaluationService.saveComponentEvaluation(saveComponentEvaluationDto)
      .subscribe({
        next: value => {
            if (value.componentEvaluationDto.id){
              show_popup(TITLE_SUCCESS, "Registro guardado correctamente");
            }
        }, error: () => {
          show_popup(TITLE_ERROR, CONTACT_SUPPORT);
        }
      })

  }

  get entryField(){
    return this.selectEntryForm.get('entry');
  }

  get observationsField(){
    return this.observationsForms.get('observations');
  }
}
