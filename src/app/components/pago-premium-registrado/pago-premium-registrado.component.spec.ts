import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoPremiumRegistradoComponent } from './pago-premium-registrado.component';

describe('PagoPremiumRegistradoComponent', () => {
  let component: PagoPremiumRegistradoComponent;
  let fixture: ComponentFixture<PagoPremiumRegistradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoPremiumRegistradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoPremiumRegistradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
