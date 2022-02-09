import { Vehiculo } from './vehiculo';
import { Trabajador } from '../Trabajadores/Trabajador';

export class Tren extends Vehiculo {
  private _tipoTren: string;
  private _estaciones: Array<string>;
  constructor(
    matricula: string,
    numPlazas: number,
    fechaInicio: Date,
    pagoTarjeta: boolean,
    trabajadores: Array<Trabajador>,
    tipoTren: string,
    estaciones: Array<string>
  ) {
    super(matricula, numPlazas, fechaInicio, pagoTarjeta, trabajadores);
    this._tipoTren = tipoTren;
    this._estaciones = estaciones;
  }
  get tipoTren(): string {
    return this._tipoTren;
  }
  set tipoTren(tipoTren: string) {
    this._tipoTren = tipoTren;
  }

  get estaciones(): Array<string> {
    return this._estaciones;
  }
  set estaciones(estaciones: Array<string>) {
    this._estaciones = estaciones;
  }
}
