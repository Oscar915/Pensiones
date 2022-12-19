import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { CreateComponent } from './Components/create/create.component';
import { OfertarComponent } from './Components/ofertar/ofertar.component';
import { HouseComponent } from './Components/house/house.component';
import { AlojamientosComponent } from './Components/alojamientos/alojamientos.component';
import { InicioSesionComponent } from './Components/inicio-sesion/inicio-sesion.component';

import { DataService } from './Services/data.service'

import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { ReservasArrendatarioComponent } from './Components/reservas-arrendatario/reservas-arrendatario.component';
import { ReservasEstudiantesComponent } from './Components/reservas-estudiantes/reservas-estudiantes.component';
import { PerfilEstudianteComponent } from './Components/perfil-estudiante/perfil-estudiante.component';
import { ContratoComponent } from './shared/contrato/contrato.component';
import { DetalleComponent } from './Components/detalle/detalle.component';
import { PagoComponent } from './shared/pago/pago.component';
import { TarjetaComponent } from './shared/tarjeta/tarjeta.component';
import { AdminHomeComponent } from './Components/admin/admin-home/admin-home.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistroComponent,
    CreateComponent,
    OfertarComponent,
    HouseComponent,
    AlojamientosComponent,
    InicioSesionComponent,
    ReservasArrendatarioComponent,
    ReservasEstudiantesComponent,
    PerfilEstudianteComponent,
    ContratoComponent,
    DetalleComponent,
    PagoComponent,
    TarjetaComponent,
    AdminHomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
