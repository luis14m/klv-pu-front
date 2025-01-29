import { ExtractDocumentTypeFromTypedRxJsonSchema, RxJsonSchema, toTypedRxJsonSchema } from 'rxdb';
import { RxActividadDocument } from '../../RxDB';

export const ACTIVIDAD_SCHEMA = {
  title: 'actividad schema',
  primaryKey: 'idActividad',
  type: 'object',
  version: 0,
  properties: {
    idActividad: {
      type: 'number',
    },
    codigo: {
      type: 'string',
      maxLength: 100
    },
    nombre: {
      type: 'string',
      maxLength: 255
    },
    unidad: {
      type: 'string',
      maxLength: 10
    },
    cantidad: {
      type: 'number'
    },
    precioUnitario: {
      type: 'number'
    },
    precioTotal: {
      type: 'number'
    },
    elementos: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          // Define Elemento properties here
        }
      }
    },
    createdAt: {
      type: 'string',
      format: 'date-time'
    },
    updatedAt: {
      type: 'string',
      format: 'date-time'
    }
  },
  required: ['idActividad', 'codigo', 'nombre', 'unidad', 'cantidad', 'precioUnitario', 'createdAt'],
  indexes: ['codigo']
};

const schemaTyped = toTypedRxJsonSchema(ACTIVIDAD_SCHEMA);
export type RxActividadDocumentType = ExtractDocumentTypeFromTypedRxJsonSchema<typeof schemaTyped>;