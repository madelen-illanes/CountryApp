import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
private appiUrl: string = 'https://restcountries.com/v2';


  constructor(private http:HttpClient) { }

  buscarPais(termino:string):Observable<Country[]>{
   const url = `${this.appiUrl}/name/${termino}`;
   return this.http.get<Country[]>(url);
  }
 
  buscarCapital(termino:string):Observable<Country[]>{
    const url = `${this.appiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }

  getPaisPorAlpha(id:string):Observable<Country>{
    const url = `${this.appiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
}

  buscarRegion(region:string):Observable<Country[]>{
   const url = `${this.appiUrl}/regionalbloc/${region}`;
   return this.http.get<Country[]>(url);
  }
}