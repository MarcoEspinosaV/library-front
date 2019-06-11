export interface IStudentLanguage {
  NAME: string;
  LAST_NAME: string;
  COURSE: string;
  CREATE_NEW: string;
  SEARCH: string;
  NOT_STUDENTS_CREATED: string;
  GENDER: string;
  ACTUAL_PROGRAM: string;
  APPLICATIONS: string;
  EDIT_STUDENT: string;
  SAVE: string;
  CANCEL: string;
  CLOSE: string;
  DELETE: string;
  BORN_DATE: string;
  FILTER: string;
  DATE_PLACEHOLDER: string;
}

const student: IStudentLanguage = {
  ACTUAL_PROGRAM: 'Programa actual',
  APPLICATIONS: 'Aplicaciones',
  BORN_DATE: 'Fecha de nacimiento',
  CANCEL: 'Cancelar',
  CLOSE: 'Cerrar',
  COURSE: 'Curso',
  CREATE_NEW: 'Crear nuevo',
  DATE_PLACEHOLDER: 'dd-mm-aaaa',
  DELETE: 'Eliminar',
  EDIT_STUDENT: 'Editar',
  FILTER: 'Filtrar',
  GENDER: 'Género',
  LAST_NAME: 'Apellido',
  NAME: 'Nombre',
  NOT_STUDENTS_CREATED: 'Aún no se han creado estudiantes',
  SAVE: 'Guardar',
  SEARCH: 'Buscar'
};

export default student;
