import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmEditarContenidoP3Component } from './adm-editar-contenido-p3.component';

describe('AdmEditarContenidoP3Component', () => {
  let component: AdmEditarContenidoP3Component;
  let fixture: ComponentFixture<AdmEditarContenidoP3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmEditarContenidoP3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmEditarContenidoP3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
