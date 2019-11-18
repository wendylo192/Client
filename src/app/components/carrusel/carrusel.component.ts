import { Component, OnInit, NgModule, HostListener, ElementRef, HostBinding, ViewChild } from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css'],
  providers: [NgbCarouselConfig]
})

@NgModule({
  imports: [NgbCarouselModule],
})

export class CarruselComponent {
  @ViewChild('video1', { static: false }) video1: ElementRef;
  @ViewChild('video2', { static: false }) video2: ElementRef;
  @ViewChild('video3', { static: false }) video3: ElementRef;
  @ViewChild('video4', { static: false }) video4: ElementRef;

  constructor(config: NgbCarouselConfig, private elRef: ElementRef) {
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
  }
  @HostListener('click', ['$event'])
  clickControles() {
    this.controlarCarrusel(event);
  };

  controlarCarrusel(e) {
    var contador = 0;

    if (e.target.className == 'carousel-control-next-icon') {
      contador = contador + 1;
      if (contador == 1) {
        this.video2.nativeElement.play();
        this.video1.nativeElement.pause();
      }
      else if (contador == 2) {
        this.video3.nativeElement.play();
        this.video2.nativeElement.pause();
        this.video1.nativeElement.pause();
      }
      else if (contador == 3) {
        this.video4.nativeElement.play();
        this.video3.nativeElement.pause();
        this.video2.nativeElement.pause();
        this.video1.nativeElement.pause();
      }
    }
    else if (e.target.className == 'carousel-control-prev-icon') {
      contador = contador - 1;
      if (contador < 0) {
        contador = 0;
      }
      if (contador == 0) {
        this.video1.nativeElement.play();
        this.video2.nativeElement.pause();
        this.video3.nativeElement.pause();
        this.video4.nativeElement.pause();
      }
      else if (contador == 1) {
        this.video2.nativeElement.play();
        this.video1.nativeElement.pause();
        this.video3.nativeElement.pause();
        this.video4.nativeElement.pause();
      }
      else if (contador == 2) {
        this.video3.nativeElement.play();
        this.video1.nativeElement.pause();
        this.video2.nativeElement.pause();
        this.video4.nativeElement.pause();
      }

    }
    else if (e.target.id == "ngb-slide-0") {
      this.video1.nativeElement.play();
      this.video2.nativeElement.pause();
      this.video3.nativeElement.pause();
      this.video4.nativeElement.pause();
    }
    else if (e.target.id == "ngb-slide-1") {
      this.video2.nativeElement.play();
      this.video1.nativeElement.pause();
      this.video4.nativeElement.pause();
      this.video3.nativeElement.pause();
    }
    else if (e.target.id == "ngb-slide-2") {
      this.video3.nativeElement.play();
      this.video1.nativeElement.pause();
      this.video2.nativeElement.pause();
      this.video4.nativeElement.pause();
    }
    else if (e.target.id == "ngb-slide-3") {
      this.video4.nativeElement.play();
      this.video3.nativeElement.pause();
      this.video1.nativeElement.pause();
      this.video2.nativeElement.pause();
    }

  }
}