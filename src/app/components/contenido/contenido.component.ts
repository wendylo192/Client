import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {
	
  mostrarTodos:boolean=false;
  mostrarRomance:boolean=false;
  mostrarDrama:boolean=false;
  mostrarComedia:boolean=false;
  mostrarAnime:boolean=false;
  
  constructor() {
  }

  ngOnInit() {
	  this.mostrarTodos=true;
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
