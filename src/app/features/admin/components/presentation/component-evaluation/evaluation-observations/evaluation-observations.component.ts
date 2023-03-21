import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-evaluation-observations',
  templateUrl: './evaluation-observations.component.html',
  styleUrls: ['./evaluation-observations.component.scss']
})
export class EvaluationObservationsComponent {
  @Input()
  form!: FormGroup;

}
