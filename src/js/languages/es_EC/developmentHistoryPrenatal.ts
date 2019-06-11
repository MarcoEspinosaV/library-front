export interface IDevelopmentHistoryPrenatalLanguage {
  PLANNED_PREGNANCY: string;
  STATE_OF_MIND_PREGNANCY: string;
  FAMILY_SITUATION_ABOUT_PREGNANCY: string;
  MOTHER_STATUS_WHILE_PREGNANCY: string;
  ILLNESS_ABORTION_RISK_ACCIDENTS: string;
  COMPLETE_TERM: string;
  GESTATION_WEEKS: string;
  C_SECTION_OR_NATURAL_BIRTH: string;
  PROVOKED_CRY_OR_SPONTANEOUS: string;
  BIRTH_COMPLICATIONS: string;
  BIRTH_COMPLICATIONS_WHICH: string;
  INCUBATOR_NEEDED: string;
  INCUBATOR_NEEDED_HOW_LONG: string;
  WEIGHT_HEIGHT_AT_BIRTH: string;
  BREST_FED_IMMEDIATELY: string;
  NEXT: string;
  PRENATAL: string;
  PERINATAL: string;
  POSTNATAL: string;
}

const developmentHistoryPrenatal: IDevelopmentHistoryPrenatalLanguage = {
  PLANNED_PREGNANCY: 'El embarazo fue planeado?',
  STATE_OF_MIND_PREGNANCY: 'Describa su estado de animo durante el embarazo?',
  FAMILY_SITUATION_ABOUT_PREGNANCY: 'Describa la situación de la familia al momento de enterarse del embarazo',
  MOTHER_STATUS_WHILE_PREGNANCY:
    'Describa las circunstancias fisicas y emocionales o el estado general de la madre durante el embarazo',
  ILLNESS_ABORTION_RISK_ACCIDENTS: 'Enfermedades, accidentes, riesgo de aborto, etc.',
  COMPLETE_TERM: 'El nacimiento fue a termino?',
  GESTATION_WEEKS: 'En que semana de gestación se dió el parto?',
  C_SECTION_OR_NATURAL_BIRTH: 'Parto fue natural o cesarea?',
  PROVOKED_CRY_OR_SPONTANEOUS: 'Llanto del niño fue espontaneo o provocado?',
  BIRTH_COMPLICATIONS: 'Durante el parto o despues, hubo alguno complicacion?',
  BIRTH_COMPLICATIONS_WHICH: 'Cual?',
  INCUBATOR_NEEDED: 'Necesitó incubadora?',
  INCUBATOR_NEEDED_HOW_LONG: 'Cuanto tiempo?',
  WEIGHT_HEIGHT_AT_BIRTH: 'Peso y tamaño al nacer',
  BREST_FED_IMMEDIATELY: 'El niño pudo succionar inmediatamente despues de nacido?',
  NEXT: 'Siguiente',
  PERINATAL: 'Perinatal',
  POSTNATAL: 'Postnatal',
  PRENATAL: 'Prenatal'
};

export default developmentHistoryPrenatal;
