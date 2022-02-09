import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TransporteService {
  private url2 = 'https://api-liga20-21.herokuapp.com/';
  private url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getVehiculosApi() {
    const url = `${this.url}/vehiculos`;
    return this.http.get(url);
  }

  addVehiculo(doc: any) {
    const url = `${this.url}/vehiculo`;
    return this.http.post(url, doc);
  }

  postTrabajador(doc: any) {
    const url = `${this.url}/trabajador`;
    return this.http.post(url, doc);
  }

  getTrabajador(doc: any) {
    const url = `${this.url}/trabajador/${doc.nombre}/${doc.apellidos}`;
    return this.http.get(url, doc);
  }

  updateVehiculo(doc: any) {
    const url = `${this.url}/vehiculo/${doc.matricula}`;
    return this.http.put(url, doc);
  }

  updateTrabajador(doc: any) {
    const url = `${this.url}/updateTrabajador/${doc.DNI}/`;
    return this.http.put(url, doc);
  }

  deleteTrabajador(DNI: string) {
    const url = `${this.url}/deleteTrabajador/${DNI}`;
    return this.http.delete(url);
  }

  deleteVehiculo(matricula: number) {
    const url = `${this.url}/deleteVehiculo/${matricula}/`;
    return this.http.delete(url);
  }
}
