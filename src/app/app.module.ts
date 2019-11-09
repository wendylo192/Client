import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { PublicidadComponent } from './components/publicidad/publicidad.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { PagoPremiumRegistradoComponent } from './components/pago-premium-registrado/pago-premium-registrado.component';
import { RegistroComponent } from './components/registro/registro.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarruselComponent,
    PublicidadComponent,
    ContenidoComponent,
    PagoPremiumRegistradoComponent,
    RegistroComponent,
    QuienesSomosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
