import { Component, Input, OnInit } from '@angular/core';

import { Estudiante } from 'src/app/models/Estudiante';

@Component({
  selector: 'app-perfil-estudiante',
  templateUrl: './perfil-estudiante.component.html',
  styleUrls: ['./perfil-estudiante.component.scss']
})
export class PerfilEstudianteComponent implements OnInit {

 // Estudiante:Estudiante={
  //  Id : '1.003.071.972',
   // Nombre : 'Esnaider Guzman',
    //Ciudad : 'Lorica',
    //departamento : 'Córdoba',
    //direccion : 'Calle 17b #15 - 28',
 // }
 
  constructor() { }

  ngOnInit(): void {
  }

}
