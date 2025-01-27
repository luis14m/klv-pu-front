import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActividadListaComponent } from './actividad-lista/actividad-lista.component';
import { ElementosListaComponent } from './elementos-lista/elementos-lista.component';
import { EditarActividadComponent } from './actividad-editar/actividad-editar.component';
import ActividadAgregarComponent from './actividad-agregar/actividad-agregar.component';

import { ElementoAgregarComponent } from './elemento-agregar/elemento-agregar.component';
import { ElementoEditarComponent } from './elemento-editar/elemento-editar.component';
import { ActividadDetalleComponent } from './actividad-detalle/actividad-detalle.component';
import { ActividadesComponent } from './resumen/resumen.component';
import { ActividadAsignarElementoComponent } from './actividad-asignar-elemento/actividad-asignar-elemento.component';

// http://localhost:4200/actividades
const routes: Routes = [
  {path:'actividades', component: ActividadListaComponent},
  {path:'',redirectTo: 'actividades',pathMatch:'full'},
  {path:'agregar-actividad', component: ActividadAgregarComponent},
  {path:'actividad-detalle/:id', component: ActividadDetalleComponent},
  {path:'actividad-editar/:id', component: EditarActividadComponent},

  {path:'elementos', component: ElementosListaComponent},
  {path:'agregar-elemento', component: ElementoAgregarComponent},
  {path:'editar-elemento/:id', component: ElementoEditarComponent},
  //{path:'asignar-elemento/:id', component: ActividadAsignarElementoComponent},
  {path:'resumen', component: ActividadesComponent}
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
