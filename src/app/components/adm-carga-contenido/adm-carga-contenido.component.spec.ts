import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmCargaContenidoComponent } from './adm-carga-contenido.component';

describe('AdmCargaContenidoComponent', () => {
  let component: AdmCargaContenidoComponent;
  let fixture: ComponentFixture<AdmCargaContenidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmCargaContenidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmCargaContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
