export interface IGeneralInformationLanguage {
  NEXT: string;
  RELATION_WHIT_EACH_FAMILY_MEMBERS: string;
  TRAUMATIC_FAMILY_EVENT_DURING_DEVELOPMENT: string;
  RELATIONSHIP_FATHER: string;
  RELATIONSHIP_MOTHER: string;
  RELATIONSHIP_SIBLINGS: string;
  RELATION: string;
}

const generalInformation: IGeneralInformationLanguage = {
  NEXT: 'Siguiente',
  RELATION: 'Relación con el familiar',
  RELATIONSHIP_FATHER: 'Relación del estudiante con el padre',
  RELATIONSHIP_MOTHER: 'Relación del estudiante con la madre',
  RELATIONSHIP_SIBLINGS: 'Relación del estudiante con los hermanos',
  RELATION_WHIT_EACH_FAMILY_MEMBERS: 'Relación con cada miembro de la familia',
  TRAUMATIC_FAMILY_EVENT_DURING_DEVELOPMENT: 'Evento traumático en la familia durante el crecimiento del estudiante'
};

export default generalInformation;
