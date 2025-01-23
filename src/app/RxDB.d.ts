import { RxCollection, RxDatabase, RxDocument } from "rxdb";
import { RxActividadDocumentType } from "./db/schemas/actividad.schema";

export type RxActividadDocument = RxDocument<RxActividadDocumentType, {}>;
export type RxActividadCollection = RxCollection<RxActividadDocumentType, {}, {}>;
export type RxActividadCollections = { myActividad: RxActividadCollection };
export type RxActividadDataBase = RxDatabase<RxActividadCollections>;    