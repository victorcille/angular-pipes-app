import { Component, OnInit } from '@angular/core';

// Necesario importarlo para luego inyectar el servicio si queremos el efecto 'splash' al hacer click en el header del fieldset o en los
// elementos del menu navbar
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private _primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this._primengConfig.ripple = true;  // Activamos el efecto splash
  }
  
}
