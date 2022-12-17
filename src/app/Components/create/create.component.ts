import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Factura } from 'src/app/models/Factura';
import { Habitacion } from 'src/app/models/Habitacion';
import { Modelodepago } from 'src/app/models/Modelodepago';
import { Reserva } from 'src/app/models/Reserva';
import { updatehabitacion } from 'src/app/models/UpdateHab';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
    


  constructor() { 


  }

  ngOnInit(): void {


  }


}
