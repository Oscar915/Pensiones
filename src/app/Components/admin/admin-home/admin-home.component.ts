import { Component, OnInit } from '@angular/core';
import { Arrendador } from 'src/app/models/Arrendador';
import { Reserva } from 'src/app/models/Reserva';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  hab: boolean = false;
  arr: boolean = false;
  res: boolean = false;

  Arrendadores: Arrendador[] = [];
  reservas: Reserva[] = [];


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.activarSection(2)
    this.traerArrendadores();
    this.traerReservas();
  }

  traerArrendadores() {
    this.dataService.getArrendador().subscribe(resp => {
      this.Arrendadores = resp;
      
    })
  }

  traerReservas() {
    this.dataService.getArrendador().subscribe(resp => {
      this.reservas = resp;
    })
  }

   desactivar(Id: number) {
    this.dataService.desactivarArrendador(Id).subscribe(resp => {
    })

  }

    activar(Id: number) {
    this.dataService.activarArrendador(Id).subscribe(resp => {
    })
  }

 

  activarSection(opcion: number) {
    switch (opcion) {
      case 1:
        this.hab = true;
        this.arr = false;
        this.res = false;
        break;

      case 2:
        this.hab = false;
        this.arr = true;
        this.res = false;
        break;

      case 3:
        this.hab = false;
        this.arr = false;
        this.res = true;
        break;
    }
  }

}
