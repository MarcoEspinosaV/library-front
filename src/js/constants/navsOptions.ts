export interface INavOptions {
  id: string | number;
  name_en_US: string | number;
  name_es_EC: string | number;
  customClass?: string;
  [name: string]: any;
}

export const CHANGE_TAB_NAME = 'CHANGE_TAB_NAME';

export const STRUCTURE_OPTIONS: { [name: string]: INavOptions } = {
  CHANGE_TAB_NAME: {
    id: CHANGE_TAB_NAME,
    name_en_US: 'Change name',
    name_es_EC: 'Cambiar nombre'
  },
  DELETE: {
    customClass: 'text-warning',
    id: 'DELETE',
    name_en_US: 'Delete',
    name_es_EC: 'Eliminar'
  }
};
