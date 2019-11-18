import { Component, OnInit } from '@angular/core';
import { Movies } from '../../models/movies';

@Component({
  selector: 'app-cont-multimedia',
  templateUrl: './cont-multimedia.component.html',
  styleUrls: ['./cont-multimedia.component.css']
})
export class ContMultimediaComponent implements OnInit {
  public movieParam: Movies;

  constructor() { }

  ngOnInit() {
    var myVideo = document.getElementsByTagName('video')[0];
    myVideo.src =  this.movieParam.ruta_video.toString();
    myVideo.load();
  }


}
