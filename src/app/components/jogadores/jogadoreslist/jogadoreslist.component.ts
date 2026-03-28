import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
import { Jogador } from '../../../models/jogador';
import Swal from 'sweetalert2';
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { JogadoresdetailsComponent } from '../jogadoresdetails/jogadoresdetails.component';
import { JogadorService } from '../../../services/jogador.service';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-jogadoreslist',
  imports: [MdbModalModule, JogadoresdetailsComponent, MdbDropdownModule, FormsModule, CommonModule],
  templateUrl: './jogadoreslist.component.html',
  styleUrl: './jogadoreslist.component.scss'
})
export class JogadoreslistComponent {
  lista: Jogador[] = [];
  jogadorEdit: Jogador = new Jogador("");
  
  //ELEMENTOS DA JANELA MODAL
  modalService = inject(MdbModalService);
  @ViewChild("modalJogadorDetalhe") modalJogadorDetalhe!: TemplateRef<any>;
  modalRef!: MdbModalRef<any>;

  jogadorService = inject(JogadorService);
  
  constructor(){
    this.listAll();
    
    let jogadorNovo = history.state.jogadorNovo;
    let jogadorEditado = history.state.jogadorEditado;
  
    if(jogadorNovo != null){
        jogadorNovo.idJogador1 = 555;
        this.lista.push(jogadorNovo);
    } 
    
    if(jogadorEditado !=null){
      let indice = this.lista.findIndex(x => {return x.idJogador1 == jogadorEditado.idJogador1});
      this.lista[indice] = jogadorEditado;
    }
  }
  

  
  //LISTAR TUDO
  listAll(){
    this.jogadorService.listAll().subscribe({
      next: lista => {
        this.lista = lista;
      },
      error: erro => {
        Swal.fire({
          title: 'Ocorreu um erro',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      }
    });
  }  


  //DELETAR
  deleteById(jogador: Jogador){
    Swal.fire({
      title: 'Tem certeza que deseja deletar este registro?',
      icon: 'warning',
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
    }).then((result) => {
      if (result.isConfirmed) {

        if (!jogador.idJogador1) return;
        this.jogadorService.delete(jogador.idJogador1).subscribe({
          next: mensagem => {
            Swal.fire({
              title: mensagem,
              icon: 'success',
              confirmButtonText: 'Ok',
          });
          this.listAll();

        },
        error: erro => {
          Swal.fire({
              title: 'Ocorreu um erro',
              icon: 'error',
              confirmButtonText: 'Ok'
          });    

       }
      });
      
      }
    });
  }


  //NOVO REGISTRO
  abrirNovo(){
    this.jogadorEdit = new Jogador("");
    this.modalRef = this.modalService.open(this.modalJogadorDetalhe, {
      modalClass: 'modal-xl'
    });
      this.fixAriaHidden();
  }

  //EDITAR REGISTRO
  edit(jogador: Jogador){
    //Essa linha de código evita referência de objeto, através de clonagem.
    //Ou seja, impede que um texto numa grid seja alterado
    //se o usuário sair sem confirmar a edição. 
    this.jogadorEdit = Object.assign({}, jogador); 
    this.modalRef = this.modalService.open(this.modalJogadorDetalhe, { 
      modalClass: 'modal-xl'
    });
  }  


  retornoDetalhe(jogador: Jogador){
    this.listAll();      
    this.modalRef.close();
  } 



  private fixAriaHidden(){
  setTimeout(() => {
    // Remove aria-hidden dos elementos problemáticos
    const overlayContainer = document.querySelector('.cdk-overlay-container');
    if (overlayContainer) {
      overlayContainer.removeAttribute('aria-hidden');
    }
    
    const appRoot = document.querySelector('app-root');
    if (appRoot) {
      appRoot.removeAttribute('aria-hidden');
    }
  }, 100);
}


ordenar(campo: string, direcao: 'asc' | 'desc') {

  this.lista.sort((a: any, b: any) => {

    let valorA = a[campo];
    let valorB = b[campo];

    // Trata null corretamente baseado na direção
    if (valorA == null && valorB == null) return 0;
    if (valorA == null) return direcao === 'asc' ? 1 : -1;
    if (valorB == null) return direcao === 'asc' ? -1 : 1;

    // Converte data ISO para número
    if (campo === 'dataNascimento') {
      valorA = new Date(valorA).getTime();
      valorB = new Date(valorB).getTime();
    }

    // Se for string
    if (typeof valorA === 'string') {
      valorA = valorA.toLowerCase();
      valorB = valorB.toLowerCase();
    }

    if (valorA > valorB) return direcao === 'asc' ? 1 : -1;
    if (valorA < valorB) return direcao === 'asc' ? -1 : 1;

    return 0;
  });
}


filtro = {
  idJogador1: '',
  nome: '',
  dataNascimento: '',
  pais: '',
  posicao: '',
  overall: ''
};


get listaFiltrada(): Jogador[] {
  return this.lista.filter(j => {
    return (
      (!this.filtro.idJogador1 || String(j.idJogador1).includes(this.filtro.idJogador1)) &&
      (!this.filtro.nome || j.nome?.toLowerCase().includes(this.filtro.nome.toLowerCase())) &&
      (!this.filtro.dataNascimento || String(j.dataNascimento).includes(this.filtro.dataNascimento)) &&
      (!this.filtro.pais || j.pais?.toLowerCase().includes(this.filtro.pais.toLowerCase())) &&
      (!this.filtro.posicao || j.posicao?.toLowerCase().includes(this.filtro.posicao.toLowerCase())) &&
      (!this.filtro.overall || String(j.overall).includes(this.filtro.overall))
    );
  });
}


ordenacaoSelecionada: string = 'idJogador1|asc';
textoOrdenacaoSelecionada: string = 'ID Jogador → Menor para maior';
selecionarOrdenacao(valor: string, texto: string) {
  this.ordenacaoSelecionada = valor;
  this.textoOrdenacaoSelecionada = texto;
  this.aplicarOrdenacao(valor);
}

aplicarOrdenacao(valor: string) {
  const partes = valor.split('|');
  const campo = partes[0];
  const direcao = partes[1] as 'asc' | 'desc';

  this.ordenar(campo, direcao);
}






}