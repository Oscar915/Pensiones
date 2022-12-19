import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataService {
   


  constructor(private _HttpClient: HttpClient ) { 
   
  }

  /************************************************************************************************* */
  public getArrendador():Observable<any>{
    return this._HttpClient.get('http://localhost:3000/api/arrendadores');
  }
 /************************************************************************************************* */
 /************************************************************************************************* */
 public getEstudiante():Observable<any>{
  return this._HttpClient.get('http://localhost:3000/api/estudiantes');
}
/************************************************************************************************* */
}
