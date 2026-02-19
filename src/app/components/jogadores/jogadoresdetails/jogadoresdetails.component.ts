import { TemplateRef, ViewChild, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Jogador } from '../../../models/jogador';
import Swal from 'sweetalert2';

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
  

  constructor(){
    let idJogador1 = this.router.snapshot.params['idJogador1'];
    if(idJogador1 > 0){
      this.findById(idJogador1);
    }
  }  
  
  findById(idJogador1: number) {
    //busca no back-end

  }

  //SALVAR
  save() {
    if (typeof this.carro.id === 'number' && this.carro.id > 0) {
      
      this.carroService.update(this.carro, this.carro.id!).subscribe({
        next: mensagem => {
          Swal.fire({
            title: mensagem,
            icon: 'success',
            confirmButtonText: 'Ok',
          });
          this.router2.navigate(['admin/carros'], {state: {carroEditado: this.carro}});
          this.retorno.emit(this.carro);
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
      
      this.carroService.save(this.carro).subscribe({
        next: mensagem => {
          Swal.fire({
            title: mensagem,
            icon: 'success',
            confirmButtonText: 'Ok',
          });
          this.router2.navigate(['admin/carros'], {state: {carroNovo: this.carro}});
          this.retorno.emit(this.carro);
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

}
