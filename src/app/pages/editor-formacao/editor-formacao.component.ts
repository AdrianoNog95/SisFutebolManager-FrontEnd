import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDrag, CdkDragEnd, CdkDragMove } from '@angular/cdk/drag-drop';
import { formacao433, PosicaoJogador } from '../../models/formacao.model';

@Component({
  selector: 'app-editor-formacao',
  standalone: true,
  imports: [CommonModule, CdkDrag],
  templateUrl: './editor-formacao.component.html',
  styleUrl: './editor-formacao.component.scss'
})
export class EditorFormacaoComponent {

  posicoes: PosicaoJogador[] = JSON.parse(JSON.stringify(formacao433));
  jsonGerado = '';

  // NOVO — controla a posição "livre" do CDK, sempre resetada
  freeDragPositions: Record<string, { x: number; y: number }> = {};

  constructor() {
    this.posicoes.forEach(p => {
      this.freeDragPositions[p.chave] = { x: 0, y: 0 };
    });
  }

  onDragEnded(event: CdkDragEnd, pos: PosicaoJogador) {
  const distancia = event.distance;
  if (Math.abs(distancia.x) < 3 && Math.abs(distancia.y) < 3) {
    return;
  }

  const campoEl = document.querySelector('.campo-editor') as HTMLElement;
  const campoRect = campoEl.getBoundingClientRect();
  const elRect = event.source.element.nativeElement.getBoundingClientRect();

  const centroX = elRect.left + elRect.width / 2;
  const centroY = elRect.top + elRect.height / 2;

  const leftPct = ((centroX - campoRect.left) / campoRect.width) * 100;
  const topPct = ((centroY - campoRect.top) / campoRect.height) * 100;

  pos.left = `${leftPct.toFixed(1)}%`;
  pos.top = `${topPct.toFixed(1)}%`;

  // ⬅️ substitui o reset via binding pelo método direto do CDK
  event.source.reset();

  this.atualizarJson();
}

  atualizarJson() {
    this.jsonGerado = JSON.stringify(this.posicoes, null, 2);
  }

  copiarJson() {
    navigator.clipboard.writeText(this.jsonGerado);
    alert('JSON copiado! Cole no formacao.model.ts');
  }

 mostrarJson() {
  const blob = new Blob([this.jsonGerado], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  window.open(url, '_blank');
  setTimeout(() => URL.revokeObjectURL(url), 10000);
}

}