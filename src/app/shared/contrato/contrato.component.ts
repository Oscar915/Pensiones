import { Component, Input, OnInit } from '@angular/core';
import { data } from 'src/app/models/data';
import { Estudiante } from 'src/app/models/Estudiante';
import {NgPrintModule} from 'ng-print';

@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.scss']
})



export class ContratoComponent implements OnInit {

  @Input() Estudiante!:Estudiante ;

  constructor() { }

  ngOnInit(): void {
  }



}
