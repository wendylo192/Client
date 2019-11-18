import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserService } from './services/user.service';
import { ContMultimediaComponent } from './components/cont-multimedia/cont-multimedia.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('header', { static: false }) header: HeaderComponent;
  @ViewChild('contenidom', { static: true }) contMultimedia: ContMultimediaComponent;

  option = 0;
  title = 'Client';
  clientHeight: number;
  footerHeight: number;

  constructor(private userService: UserService) {
    this.clientHeight = window.innerHeight;
  }

  onLogin(datos) {
    if (datos) {
      this.option = 0;
      this.header.setUser(datos.user);
    }
  }

  setOption(data) {
    this.option = data;
  }

  onSignUp(data) {
    if (data.registro) {
      this.setOption(5);
    }
  }

  onPremium(datos) {
    this.header.user.role = "PREMIUM";
    this.userService.updateUser(this.header.user).subscribe(data => {
      if (data && data["message"])
        alert("ERROR: " + data["message"]);
      else {
        this.setOption(7);
        this.header.premium = true;
      }
    });
  }

  onReproducir(datos) {
    console.log("entro onreproducir")
    console.log(datos)
    this.contMultimedia.movieParam = datos.movieParam;

    if (this.header.logueado) {
      if (datos.movieParam.estado === "habilitado") {
        if (this.header.premium) {
          this.setOption(8)
        } else {
          this.setOption(6)
        }
      } else {
        console.log("entra no premium")
        this.setOption(8)
      }

    } else {
      this.setOption(1)
    }


  }
}
