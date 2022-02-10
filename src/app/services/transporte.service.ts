import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TransporteService {
  private url2 = 'https://api-liga20-21.herokuapp.com/';
  private url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  // GET
  getTrenes(): Observable<any> {
    const url = `${this.url}/trenes`;
    return this.http.get(url);
  }

  getAutobus(): Observable<any> {
    const url = `${this.url}/autobuses`;
    return this.http.get(url);
  }

  getConductores(): Observable<any> {
    const url = `${this.url}/conductores`;
    return this.http.get(url);
  }

  getMecanicos(): Observable<any> {
    const url = `${this.url}/mecanicos`;
    return this.http.get(url);
  }

  getTrabajador(doc: any): Observable<any> {
    const url = `${this.url}/trabajador/${doc.nombre}/${doc.apellidos}`;
    return this.http.get(url, doc);
  }

  // POST
  postConductor(doc: any): Observable<any> {
    const url = `${this.url}/conductor`;
    return this.http.post(url, doc);
  }

  postMecanico(doc: any): Observable<any> {
    const url = `${this.url}/mecanico`;
    return this.http.post(url, doc);
  }

  postTren(doc: any): Observable<any> {
    const url = `${this.url}/tren`;
    return this.http.post(url, doc);
  }

  postAutobus(doc: any): Observable<any> {
    const url = `${this.url}/autobus`;
    return this.http.post(url, doc);
  }

  // PUT
  updateTren(doc: any): Observable<any> {
    const url = `${this.url}/updateTren/${doc.matricula}`;
    return this.http.put(url, doc);
  }

  updateAutobus(doc: any): Observable<any> {
    const url = `${this.url}/updateAutobus/${doc.matricula}`;
    return this.http.put(url, doc);
  }

  updateConductor(doc: any): Observable<any> {
    const url = `${this.url}/updateTrabajador/${doc.DNI}/`;
    return this.http.put(url, doc);
  }

  updateMecanico(doc: any): Observable<any> {
    const url = `${this.url}/updateTrabajador/${doc.DNI}/`;
    return this.http.put(url, doc);
  }

  // DELETE
  deleteTrabajador(DNI: string): Observable<any> {
    const url = `${this.url}/deleteTrabajador/${DNI}`;
    return this.http.delete(url);
  }

  deleteVehiculo(matricula: number): Observable<any> {
    const url = `${this.url}/deleteVehiculo/${matricula}/`;
    return this.http.delete(url);
  }
}
