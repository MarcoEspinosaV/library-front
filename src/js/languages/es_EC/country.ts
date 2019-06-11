export interface ICountryLanguage {
  CODE: string;
  CREATE_COUNTRY: string;
  FILTER: string;
  LANGUAGE: string;
  NAME: string;
  NO_COUNTRIES_HAVE_BEEN_ENTERED: string;
  EDIT_COUNTRY: string;
  SAVE: string;
  CANCEL: string;
  CLOSE: string;
  SEARCH: string;
}

const country: ICountryLanguage = {
  CANCEL: 'Cancelar',
  CLOSE: 'Cerrar',
  CODE: 'Código',
  CREATE_COUNTRY: 'Crear país',
  EDIT_COUNTRY: 'Editar país',
  FILTER: 'filtrar',
  LANGUAGE: 'Idioma',
  NAME: 'Nombre',
  NO_COUNTRIES_HAVE_BEEN_ENTERED: 'No se han ingresado países',
  SAVE: 'Guardar',
  SEARCH: 'Buscar'
};

export default country;
