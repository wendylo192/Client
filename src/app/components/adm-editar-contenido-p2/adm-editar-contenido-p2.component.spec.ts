import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmEditarContenidoP2Component } from './adm-editar-contenido-p2.component';

describe('AdmEditarContenidoP2Component', () => {
  let component: AdmEditarContenidoP2Component;
  let fixture: ComponentFixture<AdmEditarContenidoP2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmEditarContenidoP2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmEditarContenidoP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
