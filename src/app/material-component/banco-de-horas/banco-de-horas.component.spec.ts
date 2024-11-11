import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BancoDeHorasComponent } from './banco-de-horas.component';

describe('BancoDeHorasComponent', () => {
  let component: BancoDeHorasComponent;
  let fixture: ComponentFixture<BancoDeHorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BancoDeHorasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BancoDeHorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
