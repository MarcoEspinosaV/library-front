export interface ISupportUserLanguage {
  NAME: string;
  LAST_NAME: string;
  EMAIL: string;
  CREATE_NEW: string;
  NOT_SUPPORT_USER_CREATED: string;
  EDIT_SUPPORT_USER: string;
  SAVE: string;
  CANCEL: string;
  CLOSE: string;
  DELETE: string;
}

const supportUser: ISupportUserLanguage = {
  CANCEL: 'Cancelar',
  CLOSE: 'Cerrar',
  CREATE_NEW: 'Crear Soporte',
  DELETE: 'Eliminar',
  EDIT_SUPPORT_USER: 'Editar usuario soporte',
  EMAIL: 'Correo electronico',
  LAST_NAME: 'Apellido',
  NAME: 'Nombre',
  NOT_SUPPORT_USER_CREATED: 'Aún no se han creado usuarios de soporte',
  SAVE: 'Guardar'
};

export default supportUser;
