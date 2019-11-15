import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private REST_GET_USER = "http://localhost:3002/users/signin";

  constructor ( private http: HttpClient ) { }

  getUser ( user: User, hash: boolean ) {
    const body = {email: user.email,
      password: user.password,
      gethash: hash};
    let header: HttpHeaders;
    header = new HttpHeaders();
    header.set("Content-Type","application/x-www-form-urlencoded");
    header.set("Access-Control-Allow-Origin", "*");
    return this.http.post(this.REST_GET_USER, body, {headers: header});
  }
}
