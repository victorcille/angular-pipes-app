import { Component } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [
    `
      thead tr th{
        border-bottom: 1px solid white; 
        border-collapse: separate; 
        border-spacing: 5px 5px;
      }

      i {
        font-size: 0.8rem;
      }
    `
  ]
})
export class NumerosComponent {

  public ventasNetas: number = 2468957.1123;
  public porcentaje : number = 0.4856;

}
