import { Injectable } from '@angular/core';
import { PeticionI } from './models/peticion.interface';
import { ResponseI } from './models/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  peticionTipoPost(form: PeticionI):Observable<ResponseI>{
    let pet = "http://localhost:8080/peticion";
    return this.http.post<ResponseI>(pet,form);
  }
}
