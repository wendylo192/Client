import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { PublicidadComponent } from './components/publicidad/publicidad.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { PagoPremiumRegistradoComponent } from './components/pago-premium-registrado/pago-premium-registrado.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AdmincargaComponent } from './components/components/admincarga/admincarga.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { AdmCargaContenidoComponent } from './components/adm-carga-contenido/adm-carga-contenido.component';
import { AdmGeneroComponent } from './components/adm-genero/adm-genero.component';
import { AdmEditarContenidoP1Component } from './components/adm-editar-contenido-p1/adm-editar-contenido-p1.component';
import { AdmEditarContenidoP2Component } from './components/adm-editar-contenido-p2/adm-editar-contenido-p2.component';
import { AdmEditarContenidoP3Component } from './components/adm-editar-contenido-p3/adm-editar-contenido-p3.component';
import { ContMultimediaComponent } from './components/cont-multimedia/cont-multimedia.component';
import { ContBitlikeListComponent } from './components/cont-bitlike-list/cont-bitlike-list.component';
import { Routes,RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

const routes: Routes = [{
  path: 'home',
  component: CarruselComponent
},
{
  path: 'quienes-somos',
  component: QuienesSomosComponent
},
{
  path: 'contenido',
  component: ContenidoComponent
},
{
  path: 'pasar-premium',
  component: PagoPremiumRegistradoComponent
}]

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
<<<<<<< HEAD
    AdmincargaComponent,
    QuienesSomosComponent
=======
    QuienesSomosComponent,
    AdmCargaContenidoComponent,
    AdmGeneroComponent,
    AdmEditarContenidoP1Component,
    AdmEditarContenidoP2Component,
    AdmEditarContenidoP3Component,
    ContMultimediaComponent,
    ContBitlikeListComponent
>>>>>>> 9cceff84e39f5056c0aa982846b09a4f3e1de59b
  ],
  imports: [
    BrowserModule,  
    RouterModule.forRoot(routes), 
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
