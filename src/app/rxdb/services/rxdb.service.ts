import { Injectable } from '@angular/core';
import { createRxDatabase, RxDatabase } from 'rxdb';
import { addRxPlugin } from 'rxdb/plugins/core';
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';

import { RxDBQueryBuilderPlugin } from 'rxdb/plugins/query-builder';
import { RxDBValidatePlugin } from 'rxdb/plugins/validate';
import { RxDBEncryptionPlugin } from 'rxdb/plugins/encryption';
import { getRxStorageDexie } from 'rxdb/plugins/dexie';
import { ACTIVIDAD_SCHEMA } from '../schemas/actividad.schema'; // Importa el esquema


// Agrega plugins necesarios
addRxPlugin(RxDBDevModePlugin);

addRxPlugin(RxDBQueryBuilderPlugin);
addRxPlugin(RxDBValidatePlugin);
addRxPlugin(RxDBEncryptionPlugin);

@Injectable({
  providedIn: 'root',
})
export class RxdbService {
  private dbPromise: Promise<RxDatabase>;

  constructor() {
    this.dbPromise = this.createDatabase();
  }

  private async createDatabase(): Promise<RxDatabase> {
    const db = await createRxDatabase({
      name: 'actividades_db',
      storage: getRxStorageDexie(),
      multiInstance: true,
    });

    await db.addCollections({
      heroes: {
        schema: ACTIVIDAD_SCHEMA, // Utiliza el esquema importado
      },
    });

    return db;
  }

  async getDatabase(): Promise<RxDatabase> {
    return this.dbPromise;
  }
}
