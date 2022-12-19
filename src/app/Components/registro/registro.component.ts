import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Arrendador } from 'src/app/models/Arrendador';
import { Estudiante } from 'src/app/models/Estudiante';
import { DataService } from 'src/app/Services/data.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
    
  
  RegistroForm:FormGroup;

  constructor(private _Router:Router,
    private _formBuilder: FormBuilder,
    private _DataService:DataService) { 

      this.RegistroForm = this._formBuilder.group({
        Nombre1:['', Validators.required],
        Nombre2:['', Validators.required],
        Apellido:['', Validators.required],
        Apellido2:['',Validators.required],
        Email:['',Validators.required],
        password_2:['', Validators.required],
        Rol:['',Validators.required]

      })
  
  }

  

  ngOnInit(): void {
  }
  
  Ejecutar(){
    //console.log(this.RegistroForm.value);
    let RegForm = this.RegistroForm.value;

    if(RegForm.Rol === 'Estudiante'){

      let Estudiante:Estudiante={
        Nombres: `${RegForm.Nombre1} ${RegForm.Nombre2}`,
        Apellidos: `${RegForm.Apellido} ${RegForm.Apellido2}`,
        Contraseña: RegForm.password_2,
        Correo: RegForm.Email,
        Carnet:  '',
        Estado: 'Activo'
      }

      //console.log(Estudiante);

      this._DataService.SetEstudiante(Estudiante)

      this.RegistroForm.reset()
      
    }

    if(RegForm.Rol === 'Arrendador'){
      let Arrendador:Arrendador={
        Nombres: `${RegForm.Nombre1} ${RegForm.Nombre2}`,
        Apellidos: `${RegForm.Apellido} ${RegForm.Apellido2}`,
        Contraseña: RegForm.password_2,
        Correo: RegForm.Email,
        Permiso:  '',
        Estado: 'Activo'
      }
      //console.log(Arrendador);
      this._DataService.SetArrendador(Arrendador);

      this.RegistroForm.reset()

      
    }
    
  }

  IniciarSession(){
    this._Router.navigate(["Login"])
  }

}
