import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  public nombreLower   : string = 'víctor';
  public nombreUpper   : string = 'VÍCTOR';
  public nombreCompleto: string = 'vÍcToR cIllEruElO';

  public fecha: Date = new Date();

  get subheaderLower(): string
  {
    return `Texto original: ${this.nombreUpper}`;
  }

  get subheaderUpper(): string
  {
    return `Texto original: ${this.nombreLower}`;
  }

  get subheaderCompleto(): string
  {
    return `Texto original: ${this.nombreCompleto}`;
  }
}
