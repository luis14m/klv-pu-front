import { Injectable } from '@angular/core';
import { createRxDatabase, RxDatabase } from 'rxdb';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
import { RxCollection } from 'rxdb';
import { actividadSchema } from '../rxdabase/schemas/actividad.schema';
import { Actividad } from '../models/actividad';
import { Elemento } from '../models/elemento';
import { elementoSchema } from '../rxdabase/schemas/elemento.schema';

import { addRxPlugin } from 'rxdb';
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';
addRxPlugin(RxDBDevModePlugin);
import { isDevMode } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DBService {

  private db!: RxDatabase; // Base de datos
  actividades!: RxCollection<Actividad>; // Colección de Actividades
  elementos!: RxCollection<Elemento>; // Colección de Elementos

  constructor() {
    this.initDatabase();
  }


  async initDatabase() {
    if (isDevMode()) {
      await import('rxdb/plugins/dev-mode').then(
        module => addRxPlugin(module.RxDBDevModePlugin)
      );
    }
    this.db = await createRxDatabase({

      name: 'actividadesdb',
      storage: getRxStorageDexie() // Usamos Dexie en lugar de IndexedDB
    });

    // Añadimos las colecciones de Actividades y Elementos
    const collections = await this.db.addCollections({
      actividades: {
        schema: actividadSchema // Esquema de Actividades
      },
      elementos: {
        schema: elementoSchema // Esquema de Elementos
      }
    });

    this.actividades = collections.actividades;
    this.elementos = collections.elementos;

    console.log('✅ Base de datos creada con Dexie:', this.db);
  }
}