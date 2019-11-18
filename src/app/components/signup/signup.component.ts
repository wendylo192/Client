import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @Output() login: EventEmitter<any> = new EventEmitter();
  public user: User;
  confirm_password: String;
  premium: boolean;
  pagos: boolean = false;
  metPago: String;

  constructor(private userService: UserService) {
    this.user = new User('','','','','', 0);
  }

  ngOnInit() {
  }

  registro(){
    if ( this.confirm_password === this.user.password ) {      
      if ( this.premium ){
        if (!this.metPago){ 
          alert("Datos incompletos");
          return;
        }
        this.user.role = "PREMIUM";
      }
      else this.user.role = "LITE";
      this.userService.setUser(this.user).subscribe(data => {
        if ( data && data["message"] )
          alert("ERROR: " + data["message"]);
        else
          this.login.emit ( { registro: true } );
      });
    } else {
      alert("Las contraseñas no coinciden");
    }
  }

  showContent(){
    this.pagos = !this.pagos;
  }

  setMetPago(pago){
    this.metPago = pago;
  }
}
