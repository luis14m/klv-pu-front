import { Component, Inject } from '@angular/core';
import { Actividad } from '../model/actividad';
import { ActividadService } from '../services/actividad.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Elemento } from '../model/elemento';
import { ElementoService } from '../services/elemento.service';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatabaseService } from '../services/database.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-actividad-editar',
  standalone: false,
  templateUrl: './actividad-editar.component.html'

})

export class EditarActividadComponent {

  actividad: Actividad = new Actividad();
  elemento: Elemento;
  idActividad: number;
  idElemento: number;
  elementos: Elemento[] = [];


  constructor(
    private actividadServicio: ActividadService,
    private elementoServicio: ElementoService,
    private enrutador: Router,
    private ruta: ActivatedRoute,
    private db: DatabaseService) { }

  async ngOnInit() {

    this.obtenerActividad();
    await this.db.initDatabase();

  }

  onSubmit() {

    this.calcular();
    this.guardarActividad();

  }


  obtenerActividad() {
    this.idActividad = this.ruta.snapshot.params['id'];
    console.log(this.idActividad);
    this.actividadServicio.obtenerActividadPorId(this.idActividad).subscribe({
      next: (datos) => (this.actividad = datos),
      error: (errores: any) => console.log(errores),
    });

  }

  calcular() {
    if (!this.actividad || !this.actividad.elementos) {
      console.warn('No hay actividad o elementos para calcular');
      return;
    }

    let sumaPrecioTotal = 0;

    for (let elemento of this.actividad.elementos) {
      // Calcular precio total de cada elemento
      elemento.precioTotal = elemento.cantidad * elemento.precioUnitario;

      // Acumular suma total
      sumaPrecioTotal += elemento.precioTotal;
    }

    // Actualizar totales de la actividad

    this.actividad.precioUnitario = this.actividad.precioTotal / this.actividad.cantidad;
    this.actividad.precioTotal = sumaPrecioTotal;

    console.log('Cálculos actualizados:', {
      elementosTotales: this.actividad.elementos.map(e => e.precioTotal),
      actividadTotal: this.actividad.precioTotal,
      precioUnitario: this.actividad.precioUnitario
    });
  }

  guardarActividad() {
    this.actividadServicio.editarActividad(this.idActividad, this.actividad).subscribe(
      {
        next: (datos) => this.irActividadLista(),
        error: (errores) => console.log(errores)
      }
    );
  }

  irActividadLista() {
    this.enrutador.navigate(['/actividad-detalle', this.idActividad]);
  }




  async addTodo() {
    if (this.newTodoTitle.trim()) {
      await this.db.addTodo(this.newTodoTitle);
      this.newTodoTitle = '';
    }
  }

  async toggleTodo(id: string) {
    await this.db.toggleTodo(id);
  }
}
