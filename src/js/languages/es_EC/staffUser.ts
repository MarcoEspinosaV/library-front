export interface IStaffUserLanguage {
  CREATE_NEW: string;
  NAME: string;
  NOT_STAFF_USERS_CREATED: string;
  LAST_NAME: string;
  EMAIL: string;
  SCHOOL: string;
  EDIT_STAFF_USER: string;
  SAVE: string;
  CANCEL: string;
  CLOSE: string;
  DELETE: string;
  RECOVERY_PASSWORD: string;
  SEARCH: string;
  SELECT_SCHOOL: string;
  SEND_RECOVERY: string;
  NOT_EXISTS_ENTRIES: string;
}

const staffUser: IStaffUserLanguage = {
  CANCEL: 'Cancelar',
  CLOSE: 'Cerrar',
  CREATE_NEW: 'Crear nuevo',
  DELETE: 'Eliminar',
  EDIT_STAFF_USER: 'Editar usuario staff',
  EMAIL: 'Correo electronico',
  LAST_NAME: 'Apellido',
  NAME: 'Nombre',
  NOT_EXISTS_ENTRIES: 'No existen entrados',
  NOT_STAFF_USERS_CREATED: 'Aún no se han creado personal de la escuela',
  RECOVERY_PASSWORD: 'Enviar Recuperar contraseña',
  SAVE: 'Guardar',
  SCHOOL: 'Escuela',
  SEARCH: 'Buscar',
  SELECT_SCHOOL: 'Seleccionar escuela',
  SEND_RECOVERY: 'Enviar'
};

export default staffUser;
