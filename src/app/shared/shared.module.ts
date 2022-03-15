import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Módulo personalizado
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    MenuComponent
  ],
  exports: [  
    // Recordar que en los exports van los componentes que vamos a usar fuera de este módulo 
    // (p.ej en el app.component.html el <app-menu></app-menu>)
    MenuComponent
  ],
  imports: [  
    // Recordar que en los imports van los módulos que tienen los componentes que vamos a usar dentro de este módulo
    // (p.ej en el menu.component.html el <p-menubar></p-menubar>)
    CommonModule,
    PrimeNgModule
  ]
})
export class SharedModule { }
