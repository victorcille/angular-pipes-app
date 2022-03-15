import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // Variables para el ejemplo del i18nSelect Pipe
  public nombre: string = '';
  public genero: string = '';

  public generoMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
  }

  // Variables para el ejemplo del i18nPlural Pipe
  public clientes: string[] = []; 
  public clientesMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos # cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  // Variable para el ejemplo del Slice Pipe
  public personas: string[] = ['Víctor', 'Ana', 'Carmen', 'Juan', 'Cristina'];

  // Variable para el ejemplo del KeyValue Pipe
  public persona = {
    nombre: 'Víctor',
    edad: 31,
    direccion: 'Madrid, España'
  };

  // Variables para el ejemplo del Async Pipe
  // Este interval() del rxjs devuelve un observable. Se emite un valor cada segundo empezando por el 0 (0, 1, 2, 3...... cada segundo)
  public miObservable = interval(1000);
  public miPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de la promesa');
    }, 4000);
  });


  
  invitar(female: boolean = false): void
  {
    if (female) {
      this.nombre = "Susana";
      this.genero = 'femenino'
    } else {
      this.nombre = "Víctor";
      this.genero = 'masculino'
    }
  }

  anhadir(cantidad: number): void
  { 
    if (this.clientes.length === 0 && cantidad === -1) {
      return;
    }

    this.clientes.length += cantidad;
  }

}
