export interface IParentApplications {
  APPLICATIONS: string;
  APPLICATION_DATE: string;
  APPLICATION_LEVEL: string;
  NEXT: string;
  NO_HAVE_APPLICATIONS: string;
  PENDING_DATA: string;
  STATUS: string;
  STUDENT: string;
}

const parentApplications: IParentApplications = {
  APPLICATIONS: 'Aplicaciones',
  APPLICATION_DATE: 'Fecha de aplicación',
  APPLICATION_LEVEL: 'Nivel de aplicación',
  PENDING_DATA: 'información pendiente',
  NEXT: 'Continuar',
  NO_HAVE_APPLICATIONS: 'No dispone aplicaciones',
  STATUS: 'Estado',
  STUDENT: 'Estudiante'
};

export default parentApplications;
