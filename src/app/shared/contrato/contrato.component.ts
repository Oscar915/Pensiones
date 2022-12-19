import { Component, Input, OnInit } from '@angular/core';
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
