import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Client';
  nosotros;

  constructor() { }

  setQuienesSomos(data) {
    this.nosotros = data.nosotros;
  }
}
