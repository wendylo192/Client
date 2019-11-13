import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  logueado;
  premium;
  constructor() { }

  ngOnInit() {
    this.logueado = false;
    this.premium = false;
    console.log("entro oninit")
  }

  premiumClick(){
    if(this.logueado == true){
      document.getElementById('pasate').style['display'] = 'block';
    }
  }

}
