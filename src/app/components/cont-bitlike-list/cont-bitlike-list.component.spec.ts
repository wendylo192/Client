import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContBitlikeListComponent } from './cont-bitlike-list.component';

describe('ContBitlikeListComponent', () => {
  let component: ContBitlikeListComponent;
  let fixture: ComponentFixture<ContBitlikeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContBitlikeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContBitlikeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
