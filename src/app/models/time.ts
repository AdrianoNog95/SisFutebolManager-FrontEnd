export class Time {
  public id?: number;
  public nome!: string;

  constructor(
    id?: number,
    nome?: string
  ) {
    if (id !== undefined) this.id = id;
    if (nome) this.nome = nome;
  }
}