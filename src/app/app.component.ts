import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Client';
  logueado = false;

  clientHeight: number;
  footerHeight: number;
  @ViewChild('footer', {static: false}) footerDiv: ElementRef;

  constructor() {
    this.clientHeight = window.innerHeight;
  }
  ngAfterViewInit() {
    console.log('entro afterview' + this.footerDiv);
    this.footerHeight = this.footerDiv.nativeElement.offsetHeight;
  }


}
