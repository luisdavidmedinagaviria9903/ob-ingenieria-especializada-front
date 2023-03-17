import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {ComponentDto} from "../../model/dto/read/component.dto";
import {catchError, map, Observable} from "rxjs";
import {ComponentTypeDto} from "../../model/dto/read/componentType.dto";
import {ComponentEntryTypeSpecsDto} from "../../model/dto/read/component-entry-type-specs.dto";
import {WComponentEntryDto} from "../../model/dto/write/w-component-entry.dto";

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  private apiUrl = environment.apiUrl;
  private getAllComponentTypeUrl = `${this.apiUrl}component/findAll/component/type`;
  private saveComponentUrl = `${this.apiUrl}component/save`;

  private getAllComponentEntryUrl = `${this.apiUrl}component/findAll`;

  constructor(private http: HttpClient) { }


  saveComponent(params: WComponentEntryDto){
    return this.http.post<any>(this.saveComponentUrl, params);
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



  getAllComponents(params: any):  Observable<any>{
    return this.http.post<any>(this.getAllComponentEntryUrl, params);
  }
}
