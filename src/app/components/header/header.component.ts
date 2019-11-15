import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  logueado;
  premium;
  public user: User;

  constructor() { }

  ngOnInit() {
    this.logueado = false;
    this.premium = false;
    console.log("entro oninit")
  }

  premiumClick(){
    if(this.logueado == true){
      document.getElementById('pasate').style['display'] = 'block';
    } else {
      window.location.href = 'http://localhost:3002/users/signin';
    }
  }

}
