import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { User } from '../models/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private REST_GET_USER = "http://localhost:3002/users/signin";
  private REST_SET_USER = "http://localhost:3002/users/signup2";
  private REST_UPDATE_USER = "http://localhost:3002/users/updateUser";

  constructor ( private http: HttpClient ) { }

  getUser ( user: User ) {
    const body = { email: user.email, password: user.password };
    return this.http.post(this.REST_GET_USER, body, httpOptions);
  }

  setUser ( user: User ) {
    const body = { email: user.email, password: user.password, name: user.name, role: user.role };
    return this.http.post(this.REST_SET_USER, body, httpOptions);
  }

  updateUser(user: User){
    const body = { role: user.role, id: user._id };
    return this.http.post(this.REST_UPDATE_USER, body, httpOptions);
  }
}
