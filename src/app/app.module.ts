import {HttpClientModule, provideHttpClient, withFetch} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  ActividadListaComponent,
  ThousandsPipe,
} from './actividad-lista/actividad-lista.component';

import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { EditarActividadComponent } from './actividad-editar/actividad-editar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import ActividadAgregarComponent from './actividad-agregar/actividad-agregar.component';
import { ElementosListaComponent } from './elementos-lista/elementos-lista.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { importProvidersFrom } from '@angular/core';
import { ElementoAgregarComponent } from './elemento-agregar/elemento-agregar.component';
import { ElementoEditarComponent } from './elemento-editar/elemento-editar.component';
import { ActividadDetalleComponent } from './actividad-detalle/actividad-detalle.component';
import { ActividadesComponent } from './resumen/resumen.component';

import { ActividadAsignarElementoComponent } from './actividad-asignar-elemento/actividad-asignar-elemento.component';

@NgModule({
  declarations: [
    AppComponent,
    ActividadAsignarElementoComponent,
    ActividadesComponent,
    ActividadListaComponent,
    ActividadAgregarComponent,
    EditarActividadComponent,
    ActividadDetalleComponent,

    ElementosListaComponent,
    ElementoAgregarComponent,
    ElementoEditarComponent,
    
  ],

  imports: [
    
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    NgxDatatableModule,
    ThousandsPipe,
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    importProvidersFrom(ActividadListaComponent),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
