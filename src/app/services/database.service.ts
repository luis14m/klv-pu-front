import { Injectable } from '@angular/core';
import { createRxDatabase, RxDatabase, RxCollection, addRxPlugin, MangoQueryNoLimit } from 'rxdb';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
//import { createClient, SupabaseClient } from '@supabase/supabase-js';

interface Elemento {

  idElemento: number;
  codigo: string;
  nombre: string;
  cantidad: number;
  unidad: string;
  precioUnitario: number;
  precioTotal: number;
}

interface Actividad {
  idActividad: number;
  codigo: string;
  nombre: string;
  cantidad: number;
  precioUnitario: number;
  unidad: string;
  precioTotal: number;
  elementos: Elemento[];
}

type ActividadCollection = RxCollection<Actividad>;

interface DatabaseCollections {
  actividades: ActividadCollection;
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private db!: RxDatabase<DatabaseCollections>;
  // private supabase: SupabaseClient;

  constructor() {
    // Initialize Supabase client - You'll need to add your Supabase credentials
    /*  this.supabase = createClient(
       'YOUR_SUPABASE_URL',
       'YOUR_SUPABASE_ANON_KEY'
     ); */
  }

  async initDatabase() {
    this.db = await createRxDatabase<DatabaseCollections>({
      name: 'apu-db',
      storage: getRxStorageDexie()
    });
    await this.db.addCollections({
      actividades: {
        schema: {
          version: 0,
          primaryKey: 'id',
          type: 'object',
          properties: {
            id: {
              type: 'number',
              maxLength: 100
            },
            nombre: {
              type: 'string'
            },
            codigo: {
              type: 'string'
            },
            cantidad: {
              type: 'number'
            },
            precioUnitario: {
              type: 'number'
            },
            unidad: {
              type: 'string'
            },
            precioTotal: {
              type: 'number'
            },
            elementos: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  idElemento: { type: 'number' },
                  codigo: { type: 'string' },
                  nombre: { type: 'string' },
                  cantidad: { type: 'number' },
                  unidad: { type: 'string' },
                  precioUnitario: { type: 'number' },
                  precioTotal: { type: 'number' }
                }
              }
            }
          },

          required: ['id', 'nombre', 'codigo']
        }
      }
    });

    // Sync with Supabase
    this.setupSync();
  }

  private async setupSync() {
    // Subscribe to Supabase realtime changes
    /* const channel = this.supabase
      .channel('todos')
      .on('realtime', { event: '*', schema: 'public', table: 'todos' }, 
        async (payload: { eventType: string; new: Partial<Actividad>; old: { id: string | MangoQueryNoLimit<Actividad> | undefined; }; }) => {
          if (payload.eventType === 'INSERT' || payload.eventType === 'UPDATE') {
            await this.db.todos.upsert(payload.new);
          } else if (payload.eventType === 'DELETE') {
            await this.db.todos.findOne(payload.old.id).remove();
          }
        }
      )
      .subscribe(); */
  }

  async addActividad(nombre: string) {
    /*
   const todo = {
     id: Date.now().toString(),
     title,
     completed: false,
     createdAt: Date.now()
   };
  */
    await this.db.actividades.insert(todo);

    // Sync with Supabase
    await this.supabase.from('todos').insert(todo);
  }

  getTodos() {
    return this.db.actividades.find().$;
  }

  async toggleTodo(id: string) {
    const todo = await this.db.actividades.findOne(id).exec();
    if (todo) {
      await todo.patch({ completed: !todo.completed });
      // Sync with Supabase
      await this.supabase
        .from('todos')
        .update({ completed: !todo.completed })
        .eq('id', id);
    }
  }
}