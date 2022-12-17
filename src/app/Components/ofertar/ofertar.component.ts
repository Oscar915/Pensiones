import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-ofertar',
  templateUrl: './ofertar.component.html',
  styleUrls: ['./ofertar.component.scss']
})
export class OfertarComponent implements OnInit {

  constructor() {

     }

  ngOnInit(): void {
  }
  

  
}
