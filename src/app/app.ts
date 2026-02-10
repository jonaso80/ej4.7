import { Component } from '@angular/core';
import { LandingPageComponent } from '../components/landing-page/landing-page';
import { CabeceraComponent } from '../components/landing-page/cabecera/cabecera';
import { LateralIzquierdoComponent } from '../components/landing-page/lateral-izquierdo/lateral-izquierdo';
import { CuerpoComponent } from '../components/landing-page/cuerpo/cuerpo';
import { LateralDerechoComponent } from '../components/landing-page/lateral-derecho/lateral-derecho';
import { PieComponent } from '../components/landing-page/pie/pie';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LandingPageComponent, 
    CabeceraComponent, 
    LateralIzquierdoComponent,
    CuerpoComponent,
    LateralDerechoComponent,
    PieComponent
  ],
  templateUrl: './app.html'
})
export class AppComponent {}