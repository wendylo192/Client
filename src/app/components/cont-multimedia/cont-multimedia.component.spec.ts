import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContMultimediaComponent } from './cont-multimedia.component';

describe('ContMultimediaComponent', () => {
  let component: ContMultimediaComponent;
  let fixture: ComponentFixture<ContMultimediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContMultimediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContMultimediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
