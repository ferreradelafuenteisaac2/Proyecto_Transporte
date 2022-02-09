export class Producto {
  _id?: number;
  _nombre: string;
  _categoria: string;
  _ubicacion: string;
  _precio: number;

  constructor(
    nombre: string,
    categoria: string,
    ubicacion: string,
    precio: number
  ) {
    this._nombre = nombre;
    this._categoria = categoria;
    this._ubicacion = ubicacion;
    this._precio = precio;
  }
}
