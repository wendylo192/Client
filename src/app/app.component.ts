import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Client';
  logueado = false;

  setLogueado(data){
    this.logueado = data.logueado;
  }

}
