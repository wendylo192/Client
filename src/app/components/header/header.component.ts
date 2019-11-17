import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public logueado = false;
  public premium = false;
  public user: User;

  @Output() onClickOption: EventEmitter<Number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  premiumClick(){
    if(this.logueado == true){
      document.getElementById('pasate').style['display'] = 'block';
    } else {
      window.location.href = 'http://localhost:3002/users/signin';
    }
  }

  setUser ( user ) {
    this.logueado = true;
    this.premium = user.role === 'PREMIUM';
    this.user = user;
  }

  changeOption(option){
    this.onClickOption.emit(option);
  }
}
