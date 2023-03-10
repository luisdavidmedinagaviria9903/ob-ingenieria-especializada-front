import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {catchError, map, Observable} from "rxjs";
import {MiscTypeDto} from "../model/dto/miscType.dto";
import {ComponentTypeDto} from "../model/dto/componentType.dto";

@Injectable({
  providedIn: 'root'
})
export class MiscTypeService {

  private apiUrl = environment.apiUrl;
  private findByCodeUrl = `${this.apiUrl}misc-type/findBy/code/`;
  constructor(private http: HttpClient) { }

  findByCode(code: string): Observable<MiscTypeDto[]>{
    return this.http.get(this.findByCodeUrl + code).pipe(
      map((result: any) => {
        let componentTypes : MiscTypeDto[] = [];
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
