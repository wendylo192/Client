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

  setUser ( user ) {
    this.logueado = true;
    this.premium = user.role === 'PREMIUM';
    this.user = user;
  }

  changeOption(option){
    this.onClickOption.emit(option);
  }

  signOut(){
    this.user = null;
    this.logueado = false;
    this.premium = false;
    this.changeOption(0);
  }

  onPremium(){
    this.changeOption(this.logueado?6:4);
  }
}
