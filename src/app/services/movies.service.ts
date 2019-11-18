import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Movies } from '../models/movies';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
};

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private REST_GET_MOVIE  = "http://localhost:3002/buscarPeliculas";
  // private REST_SET_MOVIE = "http://localhost:3002/users/signup2";
  // private REST_UPDATE_MOVIE = "http://localhost:3002/users/updateUser";



  constructor(private http: HttpClient) { }

  getMovie() {
    console.log('servicio_rest');
    // const body = { titulo: movie.titulo, genero: movie.genero, ruta_imagen : movie.ruta_imagen};
    return this.http.get(this.REST_GET_MOVIE, httpOptions);
  }


}

