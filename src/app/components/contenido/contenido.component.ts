import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movies } from 'src/app/models/movies';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css'],
  
})
export class ContenidoComponent implements OnInit {
  
  public movies: Movies;
  public peliculas: Movies[];

  
  public onSearchMovies() {
    this.moviesService.getMovie().subscribe(data => {
      if (data && data["message"]) {
        alert("ERROR: " + data["message"]);
      } else {  
        const mapped = Object.keys(data).map(key => (data[key]));
        this.peliculas = mapped;
        // const mapped = Object.keys(data).map(key => new Movies(key._id, 
        //   key.titulo, key.genero, key.anio, key.duracion, key.descripcion, key.estado, key.ruta_imagen, key.ruta_video)));
        console.log("new ", this.peliculas);
        //this.peliculas = new Movies();
        //console.log("pelis ", this.peliculas);
      }
    });
  }
  
  mostrarTodos:boolean=false;
  mostrarRomance:boolean=false;
  mostrarDrama:boolean=false;
  mostrarComedia:boolean=false;
  mostrarAnime:boolean=false;

  constructor(private moviesService:MoviesService) {
  this.movies = new Movies('','','','','','','','','');
 
  
  }



  
  ngOnInit() {
    this.mostrarTodos=true;
    this.onSearchMovies();
    }
  
  mostrar(value){ 
   this.ocultarTodosDefecto();
   if(value==1){
	  this.mostrarTodos = true;
   }
   else if(value==2){
	  this.mostrarRomance=true; 
   }
   else if(value==3){
	  this.mostrarDrama=true; 
   }
   else if(value ==4){
	   this.mostrarComedia=true;
   }
   else if(value ==5){
	   this.mostrarAnime=true;
   }  
  }
  
  ocultarTodosDefecto(){
	  this.mostrarTodos=false;
	  this.mostrarRomance=false;
	  this.mostrarDrama=false;
	  this.mostrarComedia=false;
	  this.mostrarAnime=false;  
  }

}
