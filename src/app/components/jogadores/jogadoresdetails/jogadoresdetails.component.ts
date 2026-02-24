import { TemplateRef, ViewChild, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Jogador } from '../../../models/jogador';
import Swal from 'sweetalert2';
import { JogadorService } from '../../../services/jogador.service';

@Component({
  selector: 'app-jogadoresdetails',
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './jogadoresdetails.component.html',
  styleUrl: './jogadoresdetails.component.scss'
})
export class JogadoresdetailsComponent {
  @Input("jogador") jogador: Jogador = new Jogador();
  @Output("retorno") retorno = new EventEmitter<any>();
  router = inject(ActivatedRoute);
  router2 = inject(Router);

  jogadorService = inject(JogadorService);
  
  constructor(){
    let idJogador1 = this.router.snapshot.params['idJogador1'];
    if(idJogador1 > 0){
      this.findById(idJogador1);
    }
  }  
  

  //PROCURAR POR ID
  findById(idJogador1: number) {
    this.jogadorService.findById(idJogador1).subscribe({
        next: retorno => {
          this.jogador = retorno;
        },
        error: erro => {
          Swal.fire({
          title: 'Ocorreu um erro',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
     }
    });
  }

  //SALVAR
  save() {
    if (typeof this.jogador.idJogador1 === 'number' && this.jogador.idJogador1 > 0) {
      
      this.jogadorService.update(this.jogador, this.jogador.idJogador1!).subscribe({
        next: mensagem => {
          Swal.fire({
            title: mensagem,
            icon: 'success',
            confirmButtonText: 'Ok',
          });
          this.router2.navigate(['/jogadores'], {state: {jogadorEditado: this.jogador}});
          this.retorno.emit(this.jogador);
        },
        error: erro => {
          Swal.fire({
            title: 'Ocorreu um erro',
            icon: 'error',
            confirmButtonText: 'Ok',
        });       
      }
    });      
             
    }else{
      
      this.jogadorService.save(this.jogador).subscribe({
        next: mensagem => {
          Swal.fire({
            title: mensagem,
            icon: 'success',
            confirmButtonText: 'Ok',
          });
          this.router2.navigate(['/jogadores'], {state: {jogadorNovo: this.jogador}});
          this.retorno.emit(this.jogador);
        },
        error: erro => {
           Swal.fire({
            title: 'Ocorreu um erro',
            icon: 'error',
            confirmButtonText: 'Ok',
          });       
        }
      });         
       
    }

  }


  onImagemSelecionada(event: any) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.jogador.fotoJogador1 = e.target.result; // Base64 direto no modelo
    };
    reader.readAsDataURL(file);
  }
}

}
