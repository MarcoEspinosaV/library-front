export interface ICostLanguage {
  COSTS_HAVE_NOT_BEEN_CREATED: string;
  NO_COSTS_DESCRIPTION: string;
  CREATE_COSTS_RESTRICTION: string;
  CREATE_COSTS: string;
  EDIT_STRUCTURE: string;
  ADD_SECTION: string;
  SECTION_NAME: string;
  COST: string;
  COSTS_TYPE: string;
  COSTS_FOR_LEVEL: string;
  HAS_TAXES: string;
  NUMBER_OF_PAYMENTS: string;
  TAXES: string;
  ALL: string;
  SAVE: string;
  REQUIRED: string;
  OPTIONAL: string;
  TOTAL: string;
  DEPOSIT_INITIAL: string;
  NO_TYPE_PAYMENT_CREATED: string;
  PAYMENT_TEXT: string;
  CREATE_TYPE_PAYMENT: string;
  ADD_PAYMENT_TYPE: string;
  EDIT_PAYMENT_TYPE: string;
  CANCEL: string;
  CLOSE: string;
  DELETE: string;
  PAYMENT_TYPE_NAME: string;
  WEIGHT: string;
  EXPIRE_DATE: string;
  ADD_QUOTA: string;
  EXPIRE_DATE_LABEL: string;
  DELETE_QUOTA: string;
  QUOTAS: string;
  NUMBER_OF_QUOTAS: string;
  SEARCH_TEXT: string;
  CONFIRM_CHANGES: string;
  CHANGES_FOUND: string;
  DISCARD: string;
}

const cost: ICostLanguage = {
  ADD_PAYMENT_TYPE: 'Crear',
  ADD_QUOTA: 'Agregar cuota',
  ADD_SECTION: 'Agregar rubro',
  ALL: 'Todos',
  CANCEL: 'Cancelar',
  CHANGES_FOUND: 'Se han encontrado cambios que aún no han sido guardados',
  CLOSE: 'Cerrar',
  CONFIRM_CHANGES: 'Confirmar cambios',
  COST: 'Rubro',
  COSTS_FOR_LEVEL: 'Costos por nivel',
  COSTS_HAVE_NOT_BEEN_CREATED: 'Al momento no tienes costos asociados a la escuela',
  COSTS_TYPE: 'Tipo de rubro',
  CREATE_COSTS: 'Crear costo',
  CREATE_COSTS_RESTRICTION: 'No puedes crear costos mientras no hayas definido una estructura para el colegio.',
  CREATE_TYPE_PAYMENT: 'Crear tipos de pago',
  DELETE: 'Eliminar',
  DELETE_QUOTA: 'Eliminar cuota',
  DEPOSIT_INITIAL: 'Deposito inicial',
  DISCARD: 'Descartar',
  EDIT_PAYMENT_TYPE: 'Editar',
  EDIT_STRUCTURE: 'Editar estructura',
  EXPIRE_DATE: 'dd-mm-aa',
  EXPIRE_DATE_LABEL: 'Fecha de vencimiento',
  HAS_TAXES: 'Tiene Impuestos',
  NO_COSTS_DESCRIPTION:
    'Los costos están asociados a la estructura del colegio, puedes definir costos que se aplicarán' +
    ' a toda la estructura general o definir costos para cada sección, nivel o clase del colegio.',
  NO_TYPE_PAYMENT_CREATED: 'No tienes tipos de pago registrados',
  NUMBER_OF_QUOTAS: 'Número de cuotas',
  NUMBER_OF_PAYMENTS: 'Número de pagos',
  OPTIONAL: 'Opcional',
  PAYMENT_TEXT:
    'Agregar tipos de pago permite, a los representantes de los estudiantes, pagar en diferentes cuotas las colegiaturas.',
  PAYMENT_TYPE_NAME: 'Nombre del tipo de pago',
  QUOTAS: 'Cuotas',
  REQUIRED: 'Obligatorio',
  SAVE: 'Guardar',
  SEARCH_TEXT: 'Buscar',
  SECTION_NAME: 'Nombre del rubro',
  TOTAL: 'Total',
  WEIGHT: 'Peso',
  TAXES: 'Impuestos'
};

export default cost;
