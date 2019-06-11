export interface IHomeGeneralLanguage {
  OWN_ROOM: string;
  ROOM_SHARED_WITH: string;
  EXPERIENCE_WITH_CAREGIVERS: string;
  HOLIDAYS: string;
  GENERAL: string;
  NEXT: string;
}

const homeGeneral: IHomeGeneralLanguage = {
  OWN_ROOM: 'Habitación para el solo?',
  ROOM_SHARED_WITH: 'con quién?',
  EXPERIENCE_WITH_CAREGIVERS: 'Experiencia con nineras o cuidadores que no sean sus padres? (Abuelos, niñeras, otros)',
  HOLIDAYS: 'Dias festivos que se celebran?',
  GENERAL: 'General',
  NEXT: 'Siguiente'
};

export default homeGeneral;
