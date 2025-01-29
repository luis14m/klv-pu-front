import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actividad } from '../model/actividad';
import { Elemento } from '../model/elemento';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root',
})
export class ActividadService {
  private urlBase = 'http://localhost:8080/apu/actividades';

  constructor(private clienteHttp: HttpClient) {}

  obtenerActividadLista(): Observable<Actividad[]> {
    return this.clienteHttp.get<Actividad[]>(this.urlBase);
  }
  agregarActividad(actividad: Actividad): Observable<Object> {
    return this.clienteHttp.post(this.urlBase, actividad);
  }
  obtenerActividadPorId(id: number): Observable<Actividad> {
    return this.clienteHttp.get<Actividad>(`${this.urlBase}/${id}`);
  }

  asignarElemento(actividadId: number, elementoId: number): Observable<Object> {
    const url = `${this.urlBase}/${actividadId}/elementos/${elementoId}`;
    return this.clienteHttp.post(url, {});  
  }

  editarActividad(id: number, actividad: Actividad): Observable<Object> {
    return this.clienteHttp.put(`${this.urlBase}/${id}`, actividad);
  }

  eliminarActividad(id: number): Observable<Object> {
    return this.clienteHttp.delete(`${this.urlBase}/${id}`);
  }

  
}
