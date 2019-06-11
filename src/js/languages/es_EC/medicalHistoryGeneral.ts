export interface IMedicalHistoryGeneralLanguage {
  EVER_GONE_DENTIST: string;
  EVER_DONE_VISION_TEST: string;
  EVER_DONE_AUDITION_TEST: string;
  HEARING_PROBLEMS: string;
  LISTENS_NORMALLY: string;
  CORRECTIVE_SHOES: string;
  CORRECTIVE_LENSES: string;
  LENSES_IN_CLASSROOM: string;
  SERIOUS_ACCIDENT: string;
  GENERAL_CHILD_HEALTH: string;
  FACILITIES_TO_CONSIDER: string;
  ACTION_WHEN_NOT_DOCTOR: string;
  INSURANCE: string;
  POLICY_NUMBER: string;
  NEXT: string;
}

const medicalHistoryGeneral: IMedicalHistoryGeneralLanguage = {
  EVER_GONE_DENTIST: 'Alguna vez ha ido al dentista?',
  EVER_DONE_VISION_TEST: 'Alguna vez ha realizado test de vision?',
  EVER_DONE_AUDITION_TEST: 'Alguna vez ha realizado test de audicion?',
  HEARING_PROBLEMS: 'Ha experimentado algun problema de oido?',
  LISTENS_NORMALLY: 'Parece que escucha normalmente?',
  CORRECTIVE_SHOES: 'Alguna vez ha usado zapatos correctivos?',
  CORRECTIVE_LENSES: 'Alguna vez ha usado lentes correctivos?',
  LENSES_IN_CLASSROOM: 'Los lentes los debe usar dentro del salon de clases?',
  SERIOUS_ACCIDENT: 'Alguna vez tuvo algun accidento serio?',
  GENERAL_CHILD_HEALTH: 'Declaracion General de salud del niño...',
  FACILITIES_TO_CONSIDER: 'Comodidades de salud relacionadas a considerar?',
  ACTION_WHEN_NOT_DOCTOR: 'Si no se puede contactar al medico, que accion se debe tomar?',
  INSURANCE: 'Aseguradora',
  POLICY_NUMBER: 'Numero de poliza',
  NEXT: 'Siguiente'
};

export default medicalHistoryGeneral;
