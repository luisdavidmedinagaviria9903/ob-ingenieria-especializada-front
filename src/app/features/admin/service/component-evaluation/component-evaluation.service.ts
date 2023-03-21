import { Injectable } from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable} from "rxjs";
import {ComponentEntryTypeSpecsDto} from "../../model/dto/read/component-entry-type-specs.dto";
import {ComponentEvaluationInventorySpecsDto} from "../../model/dto/read/component-evaluation-inventory-specs.dto";
import {SaveComponentEvaluationDto} from "../../model/dto/write/save-component-evaluation.dto";

@Injectable({
  providedIn: 'root'
})
export class ComponentEvaluationService {
  private apiUrl = environment.apiUrl;
  private getAllComponentEvaluationSpecUrl = `${this.apiUrl}component-evaluation/findAll/specs`;

  private saveComponentEvaluationUrl  = `${this.apiUrl}component-evaluation/save`;
  constructor(private httpClient: HttpClient) { }


  getAllComponentEvaluationSpec(): Observable<ComponentEvaluationInventorySpecsDto[]>{
    return this.httpClient.get(this.getAllComponentEvaluationSpecUrl).pipe(
      map((result: any) => {
        let componentTypes : ComponentEvaluationInventorySpecsDto[] = [];
        if (result && result.length > 0){
          componentTypes = result;
        }
        return componentTypes;
      }),catchError(() => {
        return []
      })
    )
  }

  saveComponentEvaluation(params: SaveComponentEvaluationDto){
    return this.httpClient.post<any>(this.saveComponentEvaluationUrl, params);
  }
}
