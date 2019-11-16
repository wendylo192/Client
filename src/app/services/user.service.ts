import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { User } from '../models/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
    })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private REST_GET_USER = "http://localhost:3002/users/signin";

  constructor ( private http: HttpClient ) { }

  getUser ( user: User, hash: boolean ) {
    console.log(this.REST_GET_USER);
    const body = JSON.stringify({email: user.email,
      password: user.password,
      gethash: hash});
    
    return this.http.post(this.REST_GET_USER, body, httpOptions);

    /* return this.http.post(this.REST_GET_USER, body.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    }) */
  }
}
