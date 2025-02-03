import { elementoSchema } from "./elemento.schema";

export const actividadSchema = {
  title: 'Actividad Schema',
  version: 0,
  description: 'Schema for Elemento model',
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: {
      type: 'string'
    },
    codigo: {
      type: 'string',
      unique: true,
    },
    nombre: {
      type: 'string',
      maxLength: 25
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
      items: elementoSchema // Referencia al esquema de Elemento
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
  required: ['id', 'codigo', 'nombre', 'unidad', 'precioUnitario', 'createdAt'],
  indexes: ['codigo', 'nombre', 'createdAt', 'updatedAt']
};