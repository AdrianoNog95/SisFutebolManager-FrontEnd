import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { Jogador } from './../../models/jogador';
import { JogadorService } from './../../services/jogador.service';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-escalacao433',
  imports: [CommonModule, MdbDropdownModule, FormsModule],
  templateUrl: './escalacao433.component.html',
  styleUrl: './escalacao433.component.scss'
})
export class Escalacao433Component implements OnInit {

  jogadorService = inject(JogadorService);

  goleiros: Jogador[] = [];
  goleiroSelecionado: Jogador = new Jogador();
  defensores: Jogador[] = [];
  lateralEsquerdoSelecionado: Jogador = new Jogador();


  ngOnInit() {
    this.carregarGoleiros();
    this.carregarDefensores();
  }

  carregarGoleiros() {
  this.jogadorService.findByPosicao('Goleiro').subscribe({
    next: jogadores => {
      this.goleiros = jogadores;
    },
    error: erro => {
      Swal.fire({
        title: 'Erro ao carregar goleiros',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }
  });
}

  carregarDefensores() {
  this.jogadorService.findByPosicao('Lateral-esquerdo').subscribe({
    next: jogadores => {
      this.defensores = jogadores;
    },
    error: erro => {
      Swal.fire({
        title: 'Erro ao carregar defensores',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }
  });
}



  selecionarGoleiro(goleiro: Jogador) {
  this.goleiroSelecionado = goleiro;
  
}

  selecionarLateralEsquerdo(defensor: Jogador) {
  this.lateralEsquerdoSelecionado = defensor;
}


}