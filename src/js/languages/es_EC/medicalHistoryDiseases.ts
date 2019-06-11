export interface IMedicalHistoryDiseasesLanguage {
  NEXT: string;
  INDICATE_STUDENT_HAS_FOLLOWING_DISEASES: string;
  RESPIRATORY_PROBLEMS: string;
  FRACTURES: string;
  CARDIOVASCULAR_PROBLEMS: string;
  TICS: string;
  SKIN_PROBLEMS: string;
  SEIZURES: string;
  DIGESTIVE_PROBLEMS: string;
  SURGERIES: string;
  ALLERGIES: string;
  TRAUMA: string;
  OTHERS: string;
  HAVE_NEUROLOGICAL_CONTROL: string;
  REASON: string;
  TAKE_ANY_MEDICATION_NOW: string;
  HEREDITARY_DISEASES: string;
  PAST_DISEASES_AND_WHAT_AGE: string;
  CHICKENPOX: string;
  SCARLET_FEVER: string;
  HEPATITIS: string;
  MEASLES: string;
  MUMPS: string;
  YOUR_CHILD_HAD_FOLLOWING_DISEASES: string;
  DIABETES: string;
  EPILEPSY: string;
  ASTHMA: string;
  YOUR_SON_CURRENTLY_DISEASES: string;
  RECURRENT_COLDS: string;
  TONSILLITIS: string;
  EARACHES: string;
  STOMACH_PAIN: string;
  HIGH_FEVER: string;
  AGE: string;
  AGE_PH: string;
}

const medicalHistoryDiseases: IMedicalHistoryDiseasesLanguage = {
  AGE: 'Edad',
  AGE_PH: 'aaaa-mm',
  ALLERGIES: 'Alergias?',
  ASTHMA: 'Asma?',
  CARDIOVASCULAR_PROBLEMS: 'Problemas cardiovasculares?',
  CHICKENPOX: 'Varicela?',
  DIABETES: 'Diabetes?',
  DIGESTIVE_PROBLEMS: 'Problemas digestivos?',
  EARACHES: 'Dolores de oídos?',
  EPILEPSY: 'Epilepsia?',
  FRACTURES: 'Fracturas',
  HAVE_NEUROLOGICAL_CONTROL: 'Ha tenido control neurológico?',
  HEPATITIS: 'Hepatitis?',
  HEREDITARY_DISEASES: 'Enfermedades familiares hereditarias',
  HIGH_FEVER: 'Fiebres altas',
  INDICATE_STUDENT_HAS_FOLLOWING_DISEASES: 'Indique si el estudiante ha tenido las siguientes enfermedades:',
  MEASLES: 'Sarampión?',
  MUMPS: 'Paperas?',
  OTHERS: 'Otros',
  PAST_DISEASES_AND_WHAT_AGE: 'En el pasado que enfermedades tuvo y a que edad?',
  REASON: 'Especifique el motivo',
  RECURRENT_COLDS: 'Resfrios recurrentes',
  RESPIRATORY_PROBLEMS: 'Problemas Respiratorios',
  SCARLET_FEVER: 'Escarlatina?',
  SEIZURES: 'Convulsiones',
  SKIN_PROBLEMS: 'Problemas de la piel',
  STOMACH_PAIN: 'Dolor de estomago o vomitos',
  SURGERIES: 'Cirugías',
  TAKE_ANY_MEDICATION_NOW: 'Toma alguna medicación actualmente?',
  TICS: 'Tics',
  TONSILLITIS: 'Amigdalitis',
  TRAUMA: 'Traumatismos',
  YOUR_CHILD_HAD_FOLLOWING_DISEASES: 'Tu hijo tiene o ha tenido las siguientes condiciones medicas?',
  YOUR_SON_CURRENTLY_DISEASES: 'Tu hijo actualemente tiene las siguientes efermedades?',
  NEXT: 'Siguiente'
};

export default medicalHistoryDiseases;
