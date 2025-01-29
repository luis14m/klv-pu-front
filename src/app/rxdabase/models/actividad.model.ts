import { RxCollection, RxDatabase } from 'rxdb';


export class ActividadModel {
  private db: RxDatabase;
  private collection: RxCollection;

  constructor(db: RxDatabase) {
    this.db = db;
    this.collection = this.db.myActividad;
  }
/* 
  async getActividad(id: string) {
    return await this.collection.findOne(id).exec();
  }

  async updateActividad(id: string, data: any) {
    const doc = await this.getActividad(id);
    return await doc.update(data);
  }

  async deleteActividad(id: string) {
    const doc = await this.getActividad(id);
    return await doc.remove();
  }

  async getAllActividades() {
    return await this.collection.find().exec();
  }
 */
   

}