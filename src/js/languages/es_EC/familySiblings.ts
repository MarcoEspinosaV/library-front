export interface IFamilySiblingsLanguage {
  NEXT: string;
  NAME: string;
  BIRTH: string;
  COURSE: string;
  COLLEGE: string;
  PLACE_OCCUPY_SIBLING: string;
  BIRTH_PH: string;
  OTHER: string;
  ADD_SIBLING: string;
  SIBLINGS_HAS_NOT_BEEN_CREATE_YET: string;
  DELETE: string;
}

const familySiblings: IFamilySiblingsLanguage = {
  ADD_SIBLING: 'Agregar hermano',
  BIRTH: 'Fecha de nacimiento',
  BIRTH_PH: 'aaaa-mm-dd',
  COLLEGE: 'Colegio en el que estudia',
  COURSE: 'Curso actual',
  DELETE: 'Eliminar',
  NAME: 'Nombre',
  NEXT: 'Siguiente',
  OTHER: 'Otro...',
  PLACE_OCCUPY_SIBLING: 'Lugar que ocupa el hermano',
  SIBLINGS_HAS_NOT_BEEN_CREATE_YET: 'Aún no se han agregado hermanos'
};

export default familySiblings;
