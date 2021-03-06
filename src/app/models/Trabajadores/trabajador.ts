export class Trabajador {
  protected _DNI: string;
  protected _nombre: string;
  protected _apellidos: string;
  protected _fechaNac: Date;
  protected _salHora: number;
  protected _cargo: string;

  constructor(
    DNI: string,
    nombre: string,
    apellidos: string,
    fechaNac: Date,
    salHora: number,
    cargo: string
  ) {
    this._DNI = DNI;
    this._nombre = nombre;
    this._apellidos = apellidos;
    this._fechaNac = fechaNac;
    this._salHora = salHora;
    this._cargo = cargo;
  }
  get DNI(): string {
    return this._DNI;
  }
  public get nombre(): string {
    return this._nombre;
  }
  public get apellidos(): string {
    return this._apellidos;
  }
  public get fechaNac(): Date {
    return this._fechaNac;
  }
  public get salHora(): number {
    return this._salHora;
  }
}
