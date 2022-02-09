import { Trabajador } from './Trabajador';

export class Mecanico extends Trabajador {
  private _especialidad: Array<string>;
  private _ubicacion: string;
  constructor(
    DNI: string,
    nombre: string,
    apellidos: string,
    fechaNac: Date,
    salHora: number,
    cargo: string,
    especialidad: Array<string>,
    ubicacion: string
  ) {
    super(DNI, nombre, apellidos, fechaNac, salHora, cargo);
    this._especialidad = especialidad;
    this._ubicacion = ubicacion;
  }
  get especialidad(): Array<string> {
    return this._especialidad;
  }
  set especialidad(especialidad: Array<string>) {
    this._especialidad = especialidad;
  }

  get ubicacion(): string {
    return this._ubicacion;
  }
  set ubicacion(ubicacion: string) {
    this._ubicacion = ubicacion;
  }
}
