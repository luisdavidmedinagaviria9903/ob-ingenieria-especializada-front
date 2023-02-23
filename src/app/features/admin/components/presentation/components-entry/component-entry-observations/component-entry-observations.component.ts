import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-component-entry-observations',
  templateUrl: './component-entry-observations.component.html',
  styleUrls: ['./component-entry-observations.component.scss']
})
export class ComponentEntryObservationsComponent {

  @Input()
  form!: FormGroup;

}
