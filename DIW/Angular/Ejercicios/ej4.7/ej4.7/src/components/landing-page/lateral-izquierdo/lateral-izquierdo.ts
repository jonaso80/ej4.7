import { Component } from '@angular/core';

@Component({
  selector: 'landing-page__lateral-izquierdo',
  standalone: true,
  template: `<ng-content></ng-content>`,
  styles: [`:host { display: block; padding: 10px; }`]
})
export class LateralIzquierdoComponent {}