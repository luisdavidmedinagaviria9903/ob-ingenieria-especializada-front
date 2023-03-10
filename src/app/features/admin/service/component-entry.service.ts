import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {catchError, map, Observable} from "rxjs";
import {ComponentTypeDto} from "../model/dto/componentType.dto";
import {ComponentEntryTypeSpecsDto} from "../model/dto/component-entry-type-specs.dto";
import {ComponentEntryDto} from "../model/dto/component-entry.dto";

@Injectable({
  providedIn: 'root'
})
export class ComponentEntryService {

  private apiUrl = environment.apiUrl;
  private getAllComponentTypeUrl = `${this.apiUrl}component-entry/findAll/component/type`;
  private getAllComponentEntrySpecUrl = `${this.apiUrl}component-entry/findAll/specs/`;
  private saveComponentEntryUrl = `${this.apiUrl}component-entry/save`;

  private getAllComponentEntryUrl = `${this.apiUrl}component-entry/findAll`;


  constructor(private http: HttpClient) { }


  saveComponentEntry(params: ComponentEntryDto){
    return this.http.post<any>(this.saveComponentEntryUrl, params);
  }


  getAllComponentType(): Observable<ComponentTypeDto[]>{
    return this.http.get(this.getAllComponentTypeUrl).pipe(
      map((result: any) => {
        let componentTypes : ComponentTypeDto[] = [];
        if (result && result.length > 0){
          componentTypes = result;
        }
        return componentTypes;
      }),catchError(() => {
        return []
      })
    )
  }

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

  getAllComponentEntry(params: any):  Observable<any>{
    return this.http.post<any>(this.getAllComponentEntryUrl, params);
  }


}
