export interface IFormsLanguage {
  SELECT_FORMS: string;
  STUDENT: string;
  FAMILY: string;
  HOME: string;
  DEVELOPMENT_HISTORY: string;
  MEDICAL_HISTORY: string;
  SAVE: string;
  CANCEL: string;
}

const forms: IFormsLanguage = {
  CANCEL: 'Cancelar',
  SELECT_FORMS: 'Selecciona los formularios que formarán parte de la ficha del estudiante.',
  DEVELOPMENT_HISTORY: 'Historial de desarrollo',
  FAMILY: 'Familia',
  HOME: 'Hogar',
  MEDICAL_HISTORY: 'Historial medico',
  STUDENT: 'Estudiante',
  SAVE: 'Guardar'
};

export default forms;
