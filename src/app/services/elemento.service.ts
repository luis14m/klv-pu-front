import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Elemento } from '../model/elemento';

@Injectable({
  providedIn: 'root'
})
export class ElementoService {
  private baseURL = 'http://localhost:8080/analisispu/elementos';

  constructor(private httpClient: HttpClient) { }

  obtenerElementoLista(): Observable<Elemento[]> {
    return this.httpClient.get<Elemento[]>(`${this.baseURL}`);
  }

  crearElemento(elemento: Elemento): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, elemento);
  }

  obtenerElementoPorId(id: number): Observable<Elemento> {
    return this.httpClient.get<Elemento>(`${this.baseURL}/${id}`);
  }

  actualizarElemento(id: number, elemento: Elemento): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, elemento);
  }

  eliminarElemento(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}