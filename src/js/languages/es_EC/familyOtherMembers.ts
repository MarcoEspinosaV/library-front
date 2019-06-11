export interface IFamilyOtherMembersLanguage {
  NEXT: string;
  NAME_COMPLETE: string;
  RELATION_SHIP: string;
  ADD_MEMBER: string;
  DELETE: string;
  MEMBERS_HAS_NOT_BEEN_CREATE_YET: string;
}

const familyOtherMembers: IFamilyOtherMembersLanguage = {
  ADD_MEMBER: 'Agregar miembro del hogar',
  DELETE: 'Eliminar',
  MEMBERS_HAS_NOT_BEEN_CREATE_YET: 'Aún no se han creado otros miembros del hogar',
  NAME_COMPLETE: 'Nombres completos',
  NEXT: 'Siguiente',
  RELATION_SHIP: 'Relación con el estudiante'
};

export default familyOtherMembers;
