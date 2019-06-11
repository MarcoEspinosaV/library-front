export interface ISchoolLanguage {
  COUNTRY: string;
  CREATE_NEW: string;
  LANGUAGE: string;
  CONFIG_PAYMENTS: string;
  NAME: string;
  NOT_SCHOOLS_CREATED: string;
  EDIT_SCHOOL: string;
  FILTER: string;
  SAVE: string;
  CANCEL: string;
  CLOSE: string;
  SELECT_COUNTRY: string;
  NOT_EXISTS_ENTRIES: string;
  YEAR_NAME: string;
  SINCE: string;
  TO: string;
  ADMINISTRATOR_STAFF: string;
  LAST_NAME: string;
  EMAIL: string;
  YEAR: string;
  SELECT_SCHOOL: string;
  ENTRY: string;
  STATUS: string;
  DATE_PLACEHOLDER: string;
  DELETE: string;
  ABBREVIATION: string;
  MIDDLE_NAME: string;
  SEARCH: string;
}

const school: ISchoolLanguage = {
  ABBREVIATION: 'Abreviación',
  ADMINISTRATOR_STAFF: 'Administrador',
  CANCEL: 'Cancelar',
  CLOSE: 'Cerrar',
  COUNTRY: 'Pais',
  CONFIG_PAYMENTS: 'Configurar Pagos',
  CREATE_NEW: 'Crear nuevo',
  DATE_PLACEHOLDER: 'aa-mm-dd',
  DELETE: 'Eliminar',
  EDIT_SCHOOL: 'Editar',
  EMAIL: 'Correo electrónico',
  ENTRY: 'Ingresar',
  FILTER: 'filter',
  LANGUAGE: 'Idioma',
  LAST_NAME: 'Apellido',
  MIDDLE_NAME: 'Segundo nombre',
  NAME: 'Nombre',
  NOT_EXISTS_ENTRIES: 'No existen entradas',
  NOT_SCHOOLS_CREATED: 'Aun no se han creado esculas',
  SAVE: 'Guardar',
  SEARCH: 'Buscar',
  SELECT_COUNTRY: 'Seleccionar país',
  SELECT_SCHOOL: 'Selecciona una escuela',
  SINCE: 'Desde',
  STATUS: 'Estado',
  TO: 'Hasta',
  YEAR: 'Año',
  YEAR_NAME: 'Nombre del año'
};

export default school;
