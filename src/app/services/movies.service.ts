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

  private REST_CREATE_MOVIE = "http://localhost:3002/crearPelicula";
  private REST_GET_MOVIE  = "http://localhost:3002/buscarPeliculas";
  private REST_GET_MOVIEBYID = "http://localhost:3002/buscarPelicula/:id";
  private REST_UPDATE_MOVIE = "http://localhost:3002/editarPelicula/:id";
  private REST_DELETE_MOVIE = "http://localhost:3002/eliminarPelicula/:id";


  constructor(private http: HttpClient) { }

  getMovie() {
    console.log('servicio_rest');
    // const body = { titulo: movie.titulo, genero: movie.genero, ruta_imagen : movie.ruta_imagen};
    return this.http.get(this.REST_GET_MOVIE, httpOptions);
  }

  createMovie ( movie: Movies ) {
    const body = { titulo: movie.titulo, genero: movie.genero, anio: movie.anio, duracion: movie.duracion, estado: movie.estado, ruta_imagen: movie.ruta_imagen, ruta_video: movie.ruta_video };
    return this.http.post(this.REST_CREATE_MOVIE, body, httpOptions);
  }
 
  getMovieById ( movie: Movies ) {
    const body = { id: movie._id };
    return this.http.get(this.REST_GET_MOVIEBYID, httpOptions);
  }

  updateMovie ( movie: Movies ) {
    const body = { titulo: movie.titulo, genero: movie.genero, anio: movie.anio, duracion: movie.duracion, estado: movie.estado, ruta_imagen: movie.ruta_imagen, ruta_video: movie.ruta_video  };
    return this.http.put(this.REST_UPDATE_MOVIE, body, httpOptions);
  }

  deleteMovie (movie: Movies){
    const body = { id: movie._id };
    return this.http.delete(this.REST_DELETE_MOVIE, httpOptions);
  }

}

