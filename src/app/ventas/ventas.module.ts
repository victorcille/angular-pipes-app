import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';

// Los pipes personalizados que creemos también debemos de importarlos para poder usarlos en los componentes del módulo
// Este en concreto como lo hemos hecho manualmente también hemos tenido que añadirlo aquí manualmente. Si lo hubiésemos creado por el
// comando del angular cli, esto ya lo hubiese hecho automáticamente 
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';
import { VuelaPipe } from './pipes/vuela.pipe';



@NgModule({
  declarations: [
    // components
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent,

    // pipes
    MayusculasPipe,    // Añadimos nuestros pipes personalizados
    OrdenarPipe,
    VuelaPipe,
  ],
  exports: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class VentasModule { }
