import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincargaComponent } from './admincarga.component';

describe('AdmincargaComponent', () => {
  let component: AdmincargaComponent;
  let fixture: ComponentFixture<AdmincargaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincargaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
