import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
    `
      .botonera {
        justify-content: end;
      }
    `
  ]
})
export class OrdenarComponent {

  public palabra: string = 'hola';
  public flag: boolean = false;

  public heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Flash',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Green Lantern',
      vuela: true,
      color: Color.verde
    }
  ];

  public campo: string = '';

  cambiarEstiloPalabra()
  {
    // (this.flag) ? this.flag = false : this.flag = true;
    
    // Esto es equivalente a lo de arriba pero más elegante
    this.flag = !this.flag;
  }

  ordenarPor( campo: string ): void
  {
    this.campo = campo;
  }

}
