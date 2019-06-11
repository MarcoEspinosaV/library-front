export interface IStructureLanguage {
  ADD_GRADE: string;
  ADD_SECTION: string;
  AGE_FROM: string;
  AGE_TO: string;
  CREATE_STRUCTURE: string;
  GRADE_NAME: string;
  MONTH: string;
  NO_STRUCTURES_DESCRIPTION: string;
  NO_STRUCTURES_TITLE: string;
  SAVE: string;
  SECTION_NAME: string;
  YEAR: string;
}

const structure: IStructureLanguage = {
  ADD_GRADE: 'Agregar grado',
  ADD_SECTION: 'Agregar sección',
  AGE_FROM: 'Edad desde',
  AGE_TO: 'Edad hasta',
  CREATE_STRUCTURE: 'Crear estructura',
  GRADE_NAME: 'Nombre del grado',
  MONTH: 'mes',
  NO_STRUCTURES_DESCRIPTION:
    'La estructura es cómo esta organizado el colegio, pudiendo dividirse por ejemplo en secciones como primaria, secundaria, etc. Y éstas secciones a su vez dividirse en niveles como primero, segundo, etc.',
  NO_STRUCTURES_TITLE: 'Este colegio no tiene ninguna estructura creada',
  SAVE: 'Guardar',
  SECTION_NAME: 'Nombre de la sección',
  YEAR: 'año'
};

export default structure;
