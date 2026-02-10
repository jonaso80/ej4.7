import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralDerecho } from './lateral-derecho';

describe('LateralDerecho', () => {
  let component: LateralDerecho;
  let fixture: ComponentFixture<LateralDerecho>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LateralDerecho]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LateralDerecho);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
