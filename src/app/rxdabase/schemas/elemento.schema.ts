export const elementoSchema = {
  title: 'Elemento schema',
  version: 0,
  description: 'Schema for Elemento model',
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: {
      type: 'string',
      
    },
    nombre: {
      type: 'string',
      index: true,
    },
    createdAt: {
      type: 'string',
      format: 'date-time',
    },
    updatedAt: {
      type: 'string',
      format: 'date-time',
    },
  },
  required: ['id', 'nombre', 'createdAt', 'updatedAt'],
  indexes: ['codigo', 'nombre',]
};