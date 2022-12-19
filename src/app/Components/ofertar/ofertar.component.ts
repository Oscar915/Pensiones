import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habitacion } from 'src/app/models/Habitacion';
import { DataService } from 'src/app/Services/data.service';


@Component({
  selector: 'app-ofertar',
  templateUrl: './ofertar.component.html',
  styleUrls: ['./ofertar.component.scss']
})
export class OfertarComponent implements OnInit {
    
  Nombre:string;

  Habitaciones:Habitacion[];
  constructor(private _Router:Router, private _DataService:DataService) {

    this.Nombre = ""+sessionStorage.getItem('Nombre')
    this.Habitaciones=[]

     }

  ngOnInit(): void {
    this._DataService.getHabitaciones()
    .subscribe(
      Resp => this.Habitaciones = Resp,
      Err => console.log(Err))


  }

  Salir(){
  sessionStorage.clear()
  this._Router.navigate(["Login"])
  }
  

  
}
