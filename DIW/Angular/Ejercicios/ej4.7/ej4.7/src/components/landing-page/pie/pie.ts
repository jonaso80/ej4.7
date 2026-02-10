import { Component } from '@angular/core';

@Component({
  selector: 'landing-page__pie',
  standalone: true,
  template: `<ng-content></ng-content>`,
  styles: [`:host { display: block; padding: 10px; }`]
})
export class PieComponent {}