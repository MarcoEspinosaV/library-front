export interface IYearLanguage {
  NAME: string;
  DATE_START: string;
  DATE_END: string;
  CREATE_NEW: string;
  NOT_EXISTS_ENTRIES: string;
  EDIT_YEAR: string;
  IS_CURRENT_YEAR: string;
  SAVE: string;
  CANCEL: string;
  CLOSE: string;
  DELETE: string;
  NOT_EXISTS_YEARS: string;
  DATE_ERROR_VALUE: string;
  SCHOOL: string;
  DATE_PLACEHOLDER: string;
}

const year: IYearLanguage = {
  CANCEL: 'Cancelar',
  CLOSE: 'Cerrar',
  CREATE_NEW: 'Crear año',
  DATE_END: 'Fecha de fin',
  DATE_ERROR_VALUE: 'No existen meses disponibles para la fecha ingresada',
  DATE_PLACEHOLDER: 'dd-mm-aaaa',
  DATE_START: 'Fecha de inicio',
  DELETE: 'Eliminar',
  EDIT_YEAR: 'Editar año',
  IS_CURRENT_YEAR: 'Este es el año en curso',
  NAME: 'Nombre',
  NOT_EXISTS_ENTRIES: 'No existen entradas',
  NOT_EXISTS_YEARS: 'Aun no se han creado años',
  SAVE: 'Guardar',
  SCHOOL: 'Escuela'
};

export default year;
