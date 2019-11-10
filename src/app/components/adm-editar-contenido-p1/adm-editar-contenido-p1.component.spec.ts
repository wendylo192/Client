import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmEditarContenidoP1Component } from './adm-editar-contenido-p1.component';

describe('AdmEditarContenidoP1Component', () => {
  let component: AdmEditarContenidoP1Component;
  let fixture: ComponentFixture<AdmEditarContenidoP1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmEditarContenidoP1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmEditarContenidoP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
