import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcularImc } from './calcular-imc';

describe('CalcularImc', () => {
  let component: CalcularImc;
  let fixture: ComponentFixture<CalcularImc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalcularImc],
    }).compileComponents();

    fixture = TestBed.createComponent(CalcularImc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
