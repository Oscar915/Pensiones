import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Arrendador } from 'src/app/models/Arrendador';
import { Estudiante } from 'src/app/models/Estudiante';
import { DataService } from 'src/app/Services/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    
  LoginForm:FormGroup;

  Arrendadores!:Arrendador[];
  Estudantes!:Estudiante[];


  constructor(private _Router:Router,
     private _formBuilder: FormBuilder,
     private _DataService:DataService) {

    this.LoginForm = this._formBuilder.group({
      user: ['', Validators.required],
      password:['', Validators.required]
    })

  }


  ngOnInit(): void {

    this._DataService.getArrendador().
    subscribe(
      Resp => {
        this.Arrendadores = Resp;
        console.log(this.Arrendadores);
        
      }, Err => console.log(Err) )

      this._DataService.getEstudiante().
    subscribe(
      Resp => {
        this.Estudantes = Resp;
        console.log(this.Estudantes);
        
      }, Err => console.log(Err) )

  }

  Ejecutar(){
    //console.log(this.LoginForm.value);
    let UserForm = this.LoginForm.value;

    if(this.Arrendadores){
      this.Arrendadores.forEach(Elem =>{
        if(UserForm.user == Elem.Correo && UserForm.password == Elem.Contraseña){
          console.log('Arrendador');
          alert('Bienvenido: ' +  Elem.Nombres);
          alert('Rol: ' + 'Arrendador');
          sessionStorage.setItem('User' , Elem.Correo)
          sessionStorage.setItem('Pass' , Elem.Contraseña)
          sessionStorage.setItem('Nombre' , Elem.Nombres)
          this._Router.navigate(["Ofertar"])
        }
      })

    } 
    
    if(this.Estudantes){
      this.Estudantes.forEach(Elem2 =>{
        if(UserForm.user == Elem2.Correo && UserForm.password == Elem2.Contraseña){
          console.log('Estudiante');
          alert('Bienvenido: ' +  Elem2.Nombres);
          alert('Rol: ' + 'Estudiante');
          sessionStorage.setItem('User' , Elem2.Correo)
          sessionStorage.setItem('Pass' , Elem2.Contraseña)
          sessionStorage.setItem('Nombre' , Elem2.Nombres)
          this._Router.navigate(["Alojamiento"])
          
        }
      })

    } else {
      alert('Credenciales incorrectas')
    }

  }

  Registrar(){
    this._Router.navigate(["Registrar"])

  }


}
