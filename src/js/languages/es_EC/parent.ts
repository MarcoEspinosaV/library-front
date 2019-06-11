export interface IParentLanguage {
  EMAIL: string;
  FIRST_NAME: string;
  LAST_NAME: string;
  MIDDLE_NAME: string;
  PARENT_HEADER_EXIT: string;
  PHONE: string;
  CREATE_NEW: string;
  NOT_PARENTS_CREATED: string;
  NOT_EXISTS_ENTRIES: string;
  EDIT_PARENT: string;
  SAVE: string;
  CANCEL: string;
  CLOSE: string;
  DELETE: string;
  SELECT_SCHOOL: string;
  SCHOOL: string;
  MY_ACCOUNT: string;
  CONFIGURATION: string;
  LOGOUT: string;
  STUDENTS: string;
  ACCOUNT: string;
  STUDENTS_HAS_NOT_BEEN_CREATED_YET: string;
}

const parent: IParentLanguage = {
  ACCOUNT: 'Cuenta',
  CANCEL: 'Cancelar',
  CLOSE: 'Cerrar',
  CREATE_NEW: 'Crear nuevo',
  CONFIGURATION: 'Configuración',
  DELETE: 'Eliminar',
  EDIT_PARENT: 'Editar',
  EMAIL: 'Correo electronico',
  FIRST_NAME: 'Primer nombre',
  LAST_NAME: 'Apellido',
  LOGOUT: 'Cerrar sesión',
  MIDDLE_NAME: 'Segundo nombre',
  MY_ACCOUNT: 'Mi cuenta',
  NOT_EXISTS_ENTRIES: 'No existen entradas',
  NOT_PARENTS_CREATED: 'Aún no se han creado padres',
  PARENT_HEADER_EXIT: 'Salir',
  PHONE: 'Teléfono',
  SAVE: 'Guardar',
  SCHOOL: 'Escuela',
  SELECT_SCHOOL: 'Seleccionar escuela',
  STUDENTS: 'Estudiantes',
  STUDENTS_HAS_NOT_BEEN_CREATED_YET: 'Aún no se han creado estudiantes'
};

export default parent;
