import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Arrendador } from '../models/Arrendador';
import { Estudiante } from '../models/Estudiante';
import { Habitacion } from '../models/Habitacion';



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

 public getEstudiante():Observable<any>{
  return this._HttpClient.get('http://localhost:3000/api/estudiantes');
}
/************************************************************************************************* */
public SetArrendador(Arrendador:Arrendador){
   this._HttpClient.post('http://localhost:3000/api/arrendador' , Arrendador)
   .subscribe(
    Resp => alert('Registrado Exitosamente'),
    Err => alert('Registrado Exitosamente'))
    
    
   
}
/************************************************************************************************* */
public SetEstudiante(Estudiante:Estudiante){
  this._HttpClient.post('http://localhost:3000/api/estudiante' , Estudiante)
  .subscribe(
   Resp => alert('Registrado Exitosamente'),
   Err => alert('Registrado Exitosamente'))
   
   
  
}
/************************************************************************************************* */

public getHabitaciones():Observable<any>{
  return this._HttpClient.get('http://localhost:3000/api/habitaciones');
}
/************************************************************************************************* */
public desactivarArrendador(Id:number):Observable<any>{
  return this._HttpClient.put('http://localhost:3000/api/desactivararrendador',{Id});
}
/************************************************************************************************* */
public activarArrendador(Id:number):Observable<any>{
  return this._HttpClient.put('http://localhost:3000/api/activararrendador',{Id});
}
/************************************************************************************************* */

public setHabitacion(Habitacion:Habitacion):Observable<any>{
  return this._HttpClient.post('http://localhost:3000/api/habitacion/' , Habitacion);
}

public traerReservas():Observable<any>{
  return this._HttpClient.get('http://localhost:3000/api/reserva');
}



}

