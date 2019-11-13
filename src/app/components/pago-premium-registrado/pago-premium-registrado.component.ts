import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pago-premium-registrado',
  templateUrl: './pago-premium-registrado.component.html',
  styleUrls: ['./pago-premium-registrado.component.css']
})
export class PagoPremiumRegistradoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  btnClick(){
    document.getElementById('pasate').style['display'] = 'none';
  }

}
