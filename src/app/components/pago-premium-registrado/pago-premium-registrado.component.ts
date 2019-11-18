import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pago-premium-registrado',
  templateUrl: './pago-premium-registrado.component.html',
  styleUrls: ['./pago-premium-registrado.component.css']
})
export class PagoPremiumRegistradoComponent implements OnInit {

  @Output() login: EventEmitter<any> = new EventEmitter();
  metPago: String;

  constructor() { }

  ngOnInit() {
  }

  btn2Click(){
    if (!this.metPago){ 
      alert("Datos incompletos");
      return;
    } else {
      this.login.emit({ premium: true });
    }
    
  }

  setMetPago(pago){
    this.metPago = pago;
  }

}
