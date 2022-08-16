import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent  {
 termino: string = '';
 hayError: boolean = false;
 paises: Country[] = []
 paisesSugeridos:Country[]=[];

  constructor(private paisService:PaisService) { }

buscar(termino:string){
  this.hayError = false;
  this.termino = termino;
  this.paisService.buscarPais(termino)

 .subscribe({
  next: paises =>{
    this.paises = paises;
    console.log(paises)
  }, error: error =>{
    console.info(error)
    this.hayError = true;
    this.paises = [];
  }
 })

}
 sugerencias(termino:string){
  this.hayError= false;

  this.paisService.buscarPais(termino)
  .subscribe(paises => this.paisesSugeridos = paises.splice(0,3))
 }
}
