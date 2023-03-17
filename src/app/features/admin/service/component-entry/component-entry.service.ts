import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {catchError, map, Observable} from "rxjs";
import {ComponentEntryTypeSpecsDto} from "../../model/dto/read/component-entry-type-specs.dto";
import {RWComponentEntryDto} from "../../model/dto/write/r-w-component-entry.dto";

@Injectable({
  providedIn: 'root'
})
export class ComponentEntryService {

  private apiUrl = environment.apiUrl;
  private getAllComponentEntrySpecUrl = `${this.apiUrl}component-entry/findAll/specs/`;

  private getAllComponentEntryByComponentStatusUrl = `${this.apiUrl}component-entry/findAll/by/component/status/`;


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

  getAllComponentEntryByComponentStatus(status: string): Observable<RWComponentEntryDto[]>{
    return this.http.get(this.getAllComponentEntryByComponentStatusUrl + status).pipe(
      map((result: any) => {
        let componentTypes : RWComponentEntryDto[] = [];
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
