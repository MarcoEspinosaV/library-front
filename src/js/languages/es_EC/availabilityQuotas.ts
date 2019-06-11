export interface IAvailabilityQuotas {
  ADD_DAY: string;
  ADD_GROUP: string;
  ASSOCIATED_LEVEL: string;
  AVAILABLE_PAYMENTS: string;
  CANCEL: string;
  CAPACITY: string;
  CAPACITY_PH: string;
  CLOSE: string;
  CONFIG: string;
  CREATE_GROUP: string;
  CREATE_GROUPS_MESSAGE: string;
  DAY: string;
  DELETE: string;
  DELETE_DAY: string;
  DONT_HAVE_GROUPS: string;
  EDIT_GROUP: string;
  EXPIRE: string;
  GROUP_NAME: string;
  INCLUDE_COST: string;
  INIT_DATE_PH: string;
  NO_DATA_SELECT: string;
  PAYMENTS: string;
  SAVE: string;
  SCHEDULES: string;
  SELECT_ASSOCIATED_LEVEL: string;
  SELECT_DAY: string;
  START: string;
  START_DATE: string;
  TIME_PH: string;
  VALID_OFFER_DAYS: string;
  WEIGHT: string;
  END: string;
  HOUR_PLACEHOLDER: string;
  NAME: string;
  LEVEL: string;
  INITIAL_DATE: string;
  DAY_QUOTA_OFFERED_EXPIRED: string;
  FIRST_SELECT_GROUP: string;
}

const availabilityQuotas: IAvailabilityQuotas = {
  ADD_DAY: 'Agregar día',
  ADD_GROUP: 'Agregar grupo',
  ASSOCIATED_LEVEL: 'Nivel asociado al grupo',
  AVAILABLE_PAYMENTS: 'Opciones de pago disponible',
  CANCEL: 'Cancelar',
  CAPACITY: 'Capacidad',
  CAPACITY_PH: '0',
  CLOSE: 'Cerrar',
  CONFIG: 'Configuración',
  CREATE_GROUP: 'Crear grupo',
  CREATE_GROUPS_MESSAGE: 'Crea grupos y asócialos a niveles para abrir la disponibilidad de cupos',
  DAY: 'Día',
  DAY_QUOTA_OFFERED_EXPIRED: 'Días en que caduca el cupo ofertado',
  DELETE: 'Eliminar',
  DELETE_DAY: 'Eliminar Día',
  DONT_HAVE_GROUPS: 'No tienes grupos creados para el colegio',
  EDIT_GROUP: 'Editar Grupo',
  END: 'Fin',
  EXPIRE: 'Vence',
  GROUP_NAME: 'Nombre del grupo',
  HOUR_PLACEHOLDER: 'hh-mm-am',
  INCLUDE_COST: 'Costos incluidos',
  INITIAL_DATE: 'Fecha inicial',
  INIT_DATE_PH: 'dd-mm-aa',
  LEVEL: 'Nivel',
  NAME: 'Nombre',
  NO_DATA_SELECT: 'No se encontraron resultados',
  PAYMENTS: 'Pagos',
  SAVE: 'Guardar',
  SCHEDULES: 'Horarios',
  SELECT_ASSOCIATED_LEVEL: 'Selecciona el nivel asociado al grupo',
  SELECT_DAY: 'Selecciona el día',
  START: 'Inicio',
  START_DATE: 'Fecha de inicio',
  TIME_PH: 'HH-DD',
  VALID_OFFER_DAYS: 'Días de oferta válida',
  WEIGHT: 'Peso',
  FIRST_SELECT_GROUP: 'Seleccione un grupo primero o configure costos para el grupo seleccionado'
};

export default availabilityQuotas;
