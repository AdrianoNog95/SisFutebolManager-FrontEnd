export class Jogador {
  public idJogador1?: number;
  public nome!: string;
  public dataNascimento?: Date;
  public pais?: string;
  public posicao?: string;
  public numeroUniforme?: number;
  public overall?: number;
  public fotoJogador1?: string;

  constructor(
    nome?: string,
    dataNascimento?: Date,
    pais?: string,
    posicao?: string,
    numeroUniforme?: number,
    overall?: number,
    fotoJogador1?: string,
    idJogador1?: number,

  ) {
    if (nome) this.nome = nome;
    if (dataNascimento) this.dataNascimento = dataNascimento;
    if (pais) this.pais = pais;
    if (posicao) this.posicao = posicao;
    if (numeroUniforme !== undefined) this.numeroUniforme = numeroUniforme;
    if (overall !== undefined) this.overall = overall;
    if (fotoJogador1) this.fotoJogador1 = fotoJogador1;
    if (idJogador1 !== undefined) this.idJogador1 = idJogador1;
  }
}