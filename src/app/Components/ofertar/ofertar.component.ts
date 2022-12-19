import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ofertar',
  templateUrl: './ofertar.component.html',
  styleUrls: ['./ofertar.component.scss']
})
export class OfertarComponent implements OnInit {
    
  Nombre:string;
  constructor(private _Router:Router) {

    this.Nombre = ""+sessionStorage.getItem('Nombre')

     }

  ngOnInit(): void {

  }

  Salir(){
  sessionStorage.clear()
  this._Router.navigate(["Login"])
  }
  

  
}
