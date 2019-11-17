import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('header', {static: false}) header: HeaderComponent;

  option = 0;
  title = 'Client';
  clientHeight: number;
  footerHeight: number;  

  constructor() {
    this.clientHeight = window.innerHeight;
  }

  onLogin (datos) {
    if ( datos ) {
      this.option = 0;
      this.header.setUser(datos.user);
    }
  }
  
  setOption(data){
    this.option = data;
  }
}
