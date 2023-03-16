import { Component } from '@angular/core';
import {ComponentDto} from "../../../model/dto/component.dto";

@Component({
  selector: 'app-component-evaluation-main',
  templateUrl: './component-evaluation-main.component.html',
  styleUrls: ['./component-evaluation-main.component.scss']
})
export class ComponentEvaluationMainComponent {
  components: ComponentDto[] = [];


}
