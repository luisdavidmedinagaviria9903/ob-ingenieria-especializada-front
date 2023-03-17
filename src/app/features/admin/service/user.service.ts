import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {catchError, map, Observable} from "rxjs";
import {UserDto} from "../model/dto/read/user.dto";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.apiUrl;
  private getAllClientsUrl = `${this.apiUrl}user/get/all/clients`;

  constructor(private http: HttpClient) { }

  getAllClients(): Observable<UserDto[]>{
    return this.http.get(this.getAllClientsUrl).pipe(
      map((result: any) => {
        let componentTypes : UserDto[] = [];
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
