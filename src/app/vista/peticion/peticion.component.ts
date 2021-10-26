import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../api.service';
import { PeticionI } from '../../models/peticion.interface';

@Component({
  selector: 'app-peticion',
  templateUrl: './peticion.component.html',
  styleUrls: ['./peticion.component.css']
})
export class PeticionComponent implements OnInit {

  peticionForm = new FormGroup({
    id: new FormControl('', Validators.required),
    numero1: new FormControl('', Validators.required),
    numero2: new FormControl('', Validators.required),
    operacion: new FormControl('', Validators.required),
  })

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  onPeticion(form:PeticionI){
    //console.log(form);
    this.api.peticionTipoPost(form).subscribe( data => {
      console.log(data);
    });
  }
}
