import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { Jogador } from '../../models/jogador';



@Component({
  selector: 'app-jogador-card',
  imports: [CommonModule, FormsModule, MdbDropdownModule],
  templateUrl: './jogador-card.component.html',
  styleUrl: './jogador-card.component.scss'
})

export class JogadorCardComponent {
  @Input({ required: true })
  jogador!: Jogador;

  @Input()
  posicao = '';

  @Input()
  jogadores: Jogador[] = [];

  @Output()
  jogadorSelecionado = new EventEmitter<Jogador>();

  selecionarJogador(jogador: Jogador): void {
    this.jogadorSelecionado.emit(jogador);
  }
}


