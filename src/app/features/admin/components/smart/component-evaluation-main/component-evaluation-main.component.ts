import { Component } from '@angular/core';
import {ComponentDto} from "../../../model/dto/read/component.dto";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-component-evaluation-main',
  templateUrl: './component-evaluation-main.component.html',
  styleUrls: ['./component-evaluation-main.component.scss']
})
export class ComponentEvaluationMainComponent {
  components: ComponentDto[] = [];
  selectEntryForm: FormGroup;

  constructor(private formBuilder: FormBuilder,) {
    this.selectEntryForm = this.formBuilder.group({
      entry: ['', Validators.required]
    })
  }


}
