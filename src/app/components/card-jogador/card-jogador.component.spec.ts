import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardJogadorComponent } from './card-jogador.component';

describe('CardJogadorComponent', () => {
  let component: CardJogadorComponent;
  let fixture: ComponentFixture<CardJogadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardJogadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardJogadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
