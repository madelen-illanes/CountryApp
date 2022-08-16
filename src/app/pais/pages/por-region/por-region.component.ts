import { Component, } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {
 regiones: string[] =[ 'EU','EFTA','CARICOM' ,'PA','AU','USAN ','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC' ];
 regionActiva:string = '';
 paises: Country[]=[];


  constructor(private paisService:PaisService) { }
getClaseCSS(region:string):string{
  return (region === this.regionActiva)
  ? 'btn btn-primary'
  : 'btn btn-outline-primary'
}

activarRegion(region:string){
  this.regionActiva= region;
  this.paisService.buscarRegion(region)
  .subscribe({
    next: regiones =>{
      this.paises = regiones;
      console.log(regiones)
    }, error: error =>{
      console.info(error)
      this.paises = [];
    }
   })
}
  

}
