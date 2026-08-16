import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { Jogador } from './../../models/jogador';
import { JogadorService } from './../../services/jogador.service';
import { FormsModule } from '@angular/forms';
import { JogadorCardComponent } from '../../components/jogador-card/jogador-card.component';
import { formacao433, PosicaoJogador } from '../../models/formacao.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-escalacao433',
  imports: [CommonModule, MdbDropdownModule, FormsModule, JogadorCardComponent],
  templateUrl: './escalacao433.component.html',
  styleUrl: './escalacao433.component.scss'
})
export class Escalacao433Component implements OnInit {

  jogadorService = inject(JogadorService);

  formacaoAtual: PosicaoJogador[] = formacao433;
  goleiros: Jogador[] = [];
  lateraisEsquerdos: Jogador[] = [];
  zagueiros1: Jogador[] = [];
  zagueiros2: Jogador[] = [];
  lateraisDireitos: Jogador[] = [];
  volantes1: Jogador[] = [];
  volantes2: Jogador[] = [];
  meioCampistas: Jogador[] = []; 
  pontasEsquerdas: Jogador[] = [];
  pontasDireitas: Jogador[] = [];
  centroavantes: Jogador[] = [];

  
  goleiroSelecionado: Jogador = new Jogador();
  lateralEsquerdoSelecionado: Jogador = new Jogador();
  zagueiro1Selecionado: Jogador = new Jogador();
  zagueiro2Selecionado: Jogador = new Jogador();
  lateralDireitoSelecionado: Jogador = new Jogador();
  volante1Selecionado: Jogador = new Jogador();
  volante2Selecionado: Jogador = new Jogador();
  meioCampoSelecionado: Jogador = new Jogador();
  pontaEsquerdaSelecionado: Jogador = new Jogador();
  pontaDireitaSelecionado: Jogador = new Jogador();
  centroavanteSelecionado: Jogador = new Jogador();
  


  ngOnInit() {
    this.carregarGoleiros();
    this.carregarLateraisEsquerdos();
    this.carregarZagueiros();
    this.carregarLateraisDireitos();
    this.carregarVolantes();
    this.carregarMeioCampistas();
    this.carregarPontasEsquerdas();
    this.carregarPontasDireitas();
    this.carregarCentroavantes();
  }

  carregarGoleiros() {
  this.jogadorService.findByPosicao('Goleiro').subscribe({
    next: jogadores => {
      this.goleiros = jogadores;
    },
    error: erro => {
      Swal.fire({
        title: 'Erro ao carregar',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }
  });
}

  carregarLateraisEsquerdos() {
  this.jogadorService.findByPosicao('Lateral-esquerdo').subscribe({
    next: jogadores => {
      this.lateraisEsquerdos = jogadores;
    },
    error: erro => {
      Swal.fire({
        title: 'Erro ao carregar',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }
  });
}


  carregarZagueiros() {
  this.jogadorService.findByPosicao('Zagueiro').subscribe({
    next: jogadores => {
      this.zagueiros1 = jogadores;
      this.zagueiros2 = jogadores;
    },
    error: erro => {
      Swal.fire({
        title: 'Erro ao carregar',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }
  });
}


  carregarLateraisDireitos() {
  this.jogadorService.findByPosicao('Lateral-direito').subscribe({
    next: jogadores => {
      this.lateraisDireitos = jogadores;
    },
    error: erro => {
      Swal.fire({
        title: 'Erro ao carregar',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }
  });
}


  carregarVolantes() {
  this.jogadorService.findByPosicao('Volante').subscribe({
    next: jogadores => {
      this.volantes1 = jogadores;
      this.volantes2 = jogadores;
      },
    error: erro => {
      Swal.fire({
        title: 'Erro ao carregar',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }
  });
}


  

  carregarMeioCampistas() {
    this.jogadorService.findByPosicao('Meio-campo').subscribe({
      next: jogadores => {
        this.meioCampistas = jogadores;
      },
      error: erro => {
        Swal.fire({
          title: 'Erro ao carregar',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      }
    });
  }


  carregarPontasEsquerdas() {
  this.jogadorService.findByPosicao('Ponta-esquerda').subscribe({
    next: jogadores => {
      this.pontasEsquerdas = jogadores;
    },
    error: erro => {
      Swal.fire({
        title: 'Erro ao carregar',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }
  });
}



  carregarPontasDireitas() {
    this.jogadorService.findByPosicao('Ponta-direita').subscribe({
    next: jogadores => {
      this.pontasDireitas = jogadores;
    },
    error: erro => {
      Swal.fire({
        title: 'Erro ao carregar',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }
  });
}



  carregarCentroavantes() {
    this.jogadorService.findByPosicao('Centroavante').subscribe({
    next: jogadores => {
      this.centroavantes = jogadores;
    },
    error: erro => {
      Swal.fire({
        title: 'Erro ao carregar',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }
  });
}



  




  selecionarGoleiro(goleiro: Jogador) {
  this.goleiroSelecionado = goleiro;
}

  selecionarLateralEsquerdo(lateralEsquerdo: Jogador) {
  this.lateralEsquerdoSelecionado = lateralEsquerdo;
}

  selecionarZagueiro1(zagueiro: Jogador) {
  this.zagueiro1Selecionado = zagueiro;
}

  selecionarZagueiro2(zagueiro: Jogador) {
  this.zagueiro2Selecionado = zagueiro;
}

  selecionarLateralDireito(lateralDireito: Jogador) {
  this.lateralDireitoSelecionado = lateralDireito;
}

  selecionarVolante1(volante: Jogador) {
  this.volante1Selecionado = volante;
}

  selecionarVolante2(volante: Jogador) {
  this.volante2Selecionado = volante;
}

  selecionarMeioCampo(meioCampo: Jogador) {
  this.meioCampoSelecionado = meioCampo;
}

  selecionarPontaEsquerda(pontaEsquerda: Jogador) {
  this.pontaEsquerdaSelecionado = pontaEsquerda;
}

  selecionarPontaDireita(pontaDireita: Jogador) {
  this.pontaDireitaSelecionado = pontaDireita;
}

  selecionarCentroavante(centroavante: Jogador) {
  this.centroavanteSelecionado = centroavante;
}

  get mapaSelecionados(): Record<string, Jogador> {
    return {
      goleiro: this.goleiroSelecionado,
      zagueiro1: this.zagueiro1Selecionado,
      zagueiro2: this.zagueiro2Selecionado,
      lateralEsquerdo: this.lateralEsquerdoSelecionado,
      lateralDireito: this.lateralDireitoSelecionado,
      volante1: this.volante1Selecionado,
      volante2: this.volante2Selecionado,
      meioCampo: this.meioCampoSelecionado,
      pontaEsquerda: this.pontaEsquerdaSelecionado,
      centroavante: this.centroavanteSelecionado,
      pontaDireita: this.pontaDireitaSelecionado,
    };
  }

  get mapaListas(): Record<string, Jogador[]> {
    return {
      goleiro: this.goleiros,
      zagueiro1: this.zagueiros1,
      zagueiro2: this.zagueiros2,
      lateralEsquerdo: this.lateraisEsquerdos,
      lateralDireito: this.lateraisDireitos,
      volante1: this.volantes1,
      volante2: this.volantes2,
      meioCampo: this.meioCampistas,
      pontaEsquerda: this.pontasEsquerdas,
      centroavante: this.centroavantes,
      pontaDireita: this.pontasDireitas,
    };
  }

  selecionarPorChave(chave: string, jogador: Jogador): void {
    const mapa: Record<string, (j: Jogador) => void> = {
      goleiro: (j) => this.selecionarGoleiro(j),
      zagueiro1: (j) => this.selecionarZagueiro1(j),
      zagueiro2: (j) => this.selecionarZagueiro2(j),
      lateralEsquerdo: (j) => this.selecionarLateralEsquerdo(j),
      lateralDireito: (j) => this.selecionarLateralDireito(j),
      volante1: (j) => this.selecionarVolante1(j),
      volante2: (j) => this.selecionarVolante2(j),
      meioCampo: (j) => this.selecionarMeioCampo(j),
      pontaEsquerda: (j) => this.selecionarPontaEsquerda(j),
      centroavante: (j) => this.selecionarCentroavante(j),
      pontaDireita: (j) => this.selecionarPontaDireita(j),
    };
    mapa[chave]?.(jogador);
  }

}

