import { Trabajador } from './Trabajador';

export class Conductor extends Trabajador {
  private _licencias: Array<string>;
  private _incidencias: Array<string>;
  constructor(
    DNI: string,
    nombre: string,
    apellidos: string,
    fechaNac: Date,
    salHora: number,
    cargo: string,
    licencias: Array<string>,
    incidencias: Array<string>
  ) {
    super(DNI, nombre, apellidos, fechaNac, salHora, cargo);
    this._licencias = licencias;
    this._incidencias = incidencias;
  }
  get licencias(): Array<string> {
    return this._licencias;
  }
  set licencias(licencias: Array<string>) {
    this._licencias = licencias;
  }

  get incidencias(): Array<string> {
    return this._incidencias;
  }
  set incidencias(incidencias: Array<string>) {
    this._incidencias = incidencias;
  }
}
