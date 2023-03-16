import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {ComponentDto} from "../../model/dto/component.dto";
import {catchError, map, Observable} from "rxjs";
import {ComponentTypeDto} from "../../model/dto/componentType.dto";
import {ComponentEntryTypeSpecsDto} from "../../model/dto/component-entry-type-specs.dto";

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  private apiUrl = environment.apiUrl;
  private getAllComponentTypeUrl = `${this.apiUrl}component/findAll/component/type`;
  private saveComponentUrl = `${this.apiUrl}component/save`;

  private getAllComponentEntryUrl = `${this.apiUrl}component/findAll`;

  constructor(private http: HttpClient) { }


  saveComponent(params: ComponentDto){
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
