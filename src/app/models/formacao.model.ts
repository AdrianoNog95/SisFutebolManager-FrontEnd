export interface PosicaoJogador {
  chave: string;   // identifica qual jogador (bate com a propriedade no componente)
  posicao: string; // nome de exibição, ex: "Centroavante"
  top: string;     // porcentagem, ex: '8%'
  left: string;    // porcentagem, ex: '50%'
}

export const formacao433: PosicaoJogador[] = [
  {
    "chave": "goleiro",
    "posicao": "Goleiro",
    "top": "87.4%",
    "left": "50.0%"
  },
  {
    "chave": "zagueiro1",
    "posicao": "Zagueiro",
    "top": "73.3%",
    "left": "30.4%"
  },
  {
    "chave": "zagueiro2",
    "posicao": "Zagueiro",
    "top": "73.8%",
    "left": "69.0%"
  },
  {
    "chave": "lateralEsquerdo",
    "posicao": "Lateral-esquerdo",
    "top": "67.0%",
    "left": "11.2%"
  },
  {
    "chave": "lateralDireito",
    "posicao": "Lateral-direito",
    "top": "67.2%",
    "left": "87.6%"
  },
  {
    "chave": "volante1",
    "posicao": "Volante",
    "top": "46.7%",
    "left": "27.0%"
  },
  {
    "chave": "volante2",
    "posicao": "Volante",
    "top": "47.6%",
    "left": "71.5%"
  },
  {
    "chave": "meioCampo",
    "posicao": "Meio-campo",
    "top": "38.8%",
    "left": "50.0%"
  },
  {
    "chave": "pontaEsquerda",
    "posicao": "Ponta-esquerda",
    "top": "23.5%",
    "left": "14.5%"
  },
  {
    "chave": "centroavante",
    "posicao": "Centroavante",
    "top": "11.7%",
    "left": "50.0%"
  },
  {
    "chave": "pontaDireita",
    "posicao": "Ponta-direita",
    "top": "24.8%",
    "left": "81.8%"
  }


];