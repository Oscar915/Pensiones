import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './Components/admin/admin-home/admin-home.component';
import { AlojamientosComponent } from './Components/alojamientos/alojamientos.component';
import { CreateComponent } from './Components/create/create.component';
import { DetalleComponent } from './Components/detalle/detalle.component';
import { HomeComponent } from './Components/home/home.component';
import { HouseComponent } from './Components/house/house.component';
import { LoginComponent } from './Components/login/login.component';
import { OfertarComponent } from './Components/ofertar/ofertar.component';
import { PerfilEstudianteComponent } from './Components/perfil-estudiante/perfil-estudiante.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { ReservasArrendatarioComponent } from './Components/reservas-arrendatario/reservas-arrendatario.component';
import { ReservasEstudiantesComponent } from './Components/reservas-estudiantes/reservas-estudiantes.component';


const routes: Routes = [
  {path:"" , component: LoginComponent},
  {path:"Login" , component:LoginComponent},
  {path:"Registrar" , component:RegistroComponent},
  {path:"Home" , component:HomeComponent},
  {path:"House" , component:HouseComponent},
  {path:"Alojamiento" , component:AlojamientosComponent},
  {path:"create/:id" , component: CreateComponent},
  {path:"Ofertar" , component:OfertarComponent},
  {path:"ReservasArrendatario" , component:ReservasArrendatarioComponent},
  {path:"ReservasEstudiantes" , component:ReservasEstudiantesComponent},
  {path:"Perfile" , component:PerfilEstudianteComponent},
  {path:"detalle" , component:DetalleComponent},
  {path:"admin/home" , component:AdminHomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
