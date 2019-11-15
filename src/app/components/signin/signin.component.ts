import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public user: User;
  @Output() logueado: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
  }

  constructor(private userService: UserService) {
    this.user = new User('','','','','', 0);
  }

  public onSubmit() {
    this.userService.getUser(this.user, false).subscribe(data => {
      this.userService.getUser(this.user, true).subscribe(items => {
        this.logueado.emit({ identity: true, user: data["user"], token: items["token"] });
        console.log("RESPUESTA", data);
      });
    });
  }
}
