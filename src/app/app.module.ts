import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  // Necesario para que el FieldSetModule de primeNG funcione

import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

import { AppComponent } from './app.component';


// Vamos a importar los idiomas locales que queramos/necesitemos
// Esto me permitirá cambiar el idioma de las fechas al usar el pipe date, si se usa por defecto el orden mm/dd/yyyy o dd/mm/yyyy, 
// si se usa ',' o '.' para separar los miles y los decimales, el símbolo de la moneda por defecto, etc...
import localeEs from "@angular/common/locales/es";  // El nombre localeEs se lo ponemos nosotros porque queremos
import localeFr from "@angular/common/locales/fr"; 
import localeJa from "@angular/common/locales/ja";  // japonés

// Este paquete es necesario importarlo para luego cargar el/los idioma/s que hayamos importado 
import { registerLocaleData } from "@angular/common";

// Vamos a registrar los idiomas que hayamos importado en el locale de la aplicación (por defecto es el inglés) 
registerLocaleData( localeEs );
registerLocaleData( localeFr );
registerLocaleData( localeJa );


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    { provide:  LOCALE_ID, useValue: 'es' }   // Establecemos el español como idioma locale por defecto
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
