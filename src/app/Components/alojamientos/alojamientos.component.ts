import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habitacion } from 'src/app/models/Habitacion';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-alojamientos',
  templateUrl: './alojamientos.component.html',
  styleUrls: ['./alojamientos.component.scss']
})
export class AlojamientosComponent implements OnInit {
  
  habitaciones: Habitacion[]=[];

  constructor(private dataService: DataService)
  { 
  
  }

  ngOnInit(): void {
   this.traerhabitaciones();
  }
  

  traerhabitaciones(){
    this.dataService.getHabitacionesLibres().subscribe(resp=>{
      this.habitaciones=resp;
      console.log(resp);
      
      
    })
  }

}
