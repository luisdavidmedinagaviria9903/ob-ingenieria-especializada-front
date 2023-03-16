import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {catchError, map, Observable} from "rxjs";
import {ComponentEntryTypeSpecsDto} from "../../model/dto/component-entry-type-specs.dto";

@Injectable({
  providedIn: 'root'
})
export class ComponentEntryService {

  private apiUrl = environment.apiUrl;
  private getAllComponentEntrySpecUrl = `${this.apiUrl}component-entry/findAll/specs/`;


  constructor(private http: HttpClient) { }


  getAllComponentEntrySpecsInventory(code: string): Observable<ComponentEntryTypeSpecsDto[]>{
    return this.http.get(this.getAllComponentEntrySpecUrl + code).pipe(
      map((result: any) => {
        let componentTypes : ComponentEntryTypeSpecsDto[] = [];
        if (result && result.length > 0){
          componentTypes = result;
        }
        return componentTypes;
      }),catchError(() => {
        return []
      })
    )
  }


}
