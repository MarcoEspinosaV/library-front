export interface IParentSideNavLabels {
  NO_STUDENT: string;
  STUDENT_DETAIL: {
    YEARS: string;
    MONTHS: string;
    PROFILE_INCOMPLETE: string;
    PROFILE_COMPLETE: string;
  };
  SCHOOL_YEAR: string;
  SUPPORT: string;
}

const parentSideNav: IParentSideNavLabels = {
  NO_STUDENT: 'Aun no ha configurado un hijo',
  SCHOOL_YEAR: 'Año electivo',
  STUDENT_DETAIL: {
    MONTHS: 'meses',
    PROFILE_COMPLETE: 'Perfil completo',
    PROFILE_INCOMPLETE: 'Perfil incompleto',
    YEARS: 'años'
  },
  SUPPORT: 'Soporte'
};

export default parentSideNav;
