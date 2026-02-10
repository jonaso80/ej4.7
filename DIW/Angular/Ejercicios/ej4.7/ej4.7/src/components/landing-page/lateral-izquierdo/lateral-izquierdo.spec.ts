import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralIzquierdo } from './lateral-izquierdo';

describe('LateralIzquierdo', () => {
  let component: LateralIzquierdo;
  let fixture: ComponentFixture<LateralIzquierdo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LateralIzquierdo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LateralIzquierdo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
