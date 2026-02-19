import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
import { Jogador } from '../../../models/jogador';
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { JogadoresdetailsComponent } from '../jogadoresdetails/jogadoresdetails.component';

@Component({
  selector: 'app-jogadoreslist',
  imports: [MdbModalModule, JogadoresdetailsComponent],
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
  
  constructor(){
    this.lista.push(new Jogador(1, 'Nesta'));
    this.lista.push(new Jogador(2, 'Beckham'));
    this.lista.push(new Jogador(3, 'Zambrotta'));
  
    let jogadorNovo = history.state.jogadorNovo;
    let jogadorEditado = history.state.jogadorEditado;
  
    if(jogadorNovo != null){
        jogadorNovo.id = 555;
        this.lista.push(jogadorNovo);
    } 
    
    if(jogadorEditado !=null){
      let indice = this.lista.findIndex(x => {return x.idJogador1 == jogadorEditado.idJogador1});
      this.lista[indice] = jogadorEditado;
    }
  }
  
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

        if (!carro.id) return;
        this.carroService.delete(carro.id).subscribe({
          next: mensagem => {//quando o back retornar o que se espera
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
    this.modalRef = this.modalService.open(this.modalJogadorDetalhe);
  }

  //EDITAR REGISTRO
  edit(jogador: Jogador){
    //Essa linha de código evita referência de objeto, através de clonagem.
    //Ou seja, impede que um texto numa grid seja alterado
    //se o usuário sair sem confirmar a edição. 
    this.jogadorEdit = Object.assign({}, jogador); 
    this.modalRef = this.modalService.open(this.modalJogadorDetalhe);
  }


  retornoDetalhe(jogador: Jogador){
    this.listAll();      
    this.modalRef.close();
  } 
