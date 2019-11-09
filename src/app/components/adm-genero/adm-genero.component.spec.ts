import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmGeneroComponent } from './adm-genero.component';

describe('AdmGeneroComponent', () => {
  let component: AdmGeneroComponent;
  let fixture: ComponentFixture<AdmGeneroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmGeneroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
