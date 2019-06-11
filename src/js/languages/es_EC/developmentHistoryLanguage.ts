export interface IDevelopmentHistoryLanguageLanguage {
  AGE_FIRST_WORDS: string;
  SHORT_SENTENCES: string;
  LANGUAGE_AT_HOME: string;
  OTHER_LANGUAGES: string;
  LANGUAGE_SKILL_AGE_GROUP: string;
  UNDERSTANDS_LANGUAGE: string;
  EXPRESS_HIMSELF: string;
  STUTTERS: string;
  WORD_PRONUNCIATION_DIFFICULTIES: string;
  LANGUAGE_THERAPY: string;
  LANGUAGE_THERAPY_HOW_LONG: string;
  THERAPIST_NAME: string;
  IS_UNDERSTOOD: string;
  LANGUAGE_DEVELOPMENT_MILESTONES: string;
  GENERAL_INFORMATION: string;
  NEXT: string;
  DATE_PH: string;
}

const developmentHistoryLanguage: IDevelopmentHistoryLanguageLanguage = {
  AGE_FIRST_WORDS: 'Edad de primeras palabras o a nombrar objetos simples?',
  SHORT_SENTENCES: 'Producir oraciones cortas (mas de 3 palabras)?',
  LANGUAGE_AT_HOME: 'Idioma que se habla en casa',
  OTHER_LANGUAGES: 'Otros idiomas?',
  LANGUAGE_SKILL_AGE_GROUP:
    'Como describiria el desarrollo de habla y lenguaje de su hijo comparandole con otros ninos de su edad? (Normal, retrasado o avanzado)',
  UNDERSTANDS_LANGUAGE: 'Comprende lo que se le dice?',
  EXPRESS_HIMSELF: 'Se expresa facilmente (sus deseos, como se siente, sus necesidades)?',
  STUTTERS: 'Tartamudea cuando habla?',
  WORD_PRONUNCIATION_DIFFICULTIES: 'Tiene dificultades en la articulacion de ciertas palabras? pronunciacion',
  LANGUAGE_THERAPY: 'Asistio a terapia de lenguaje',
  THERAPIST_NAME: 'Nombre del terapeuta',
  IS_UNDERSTOOD: 'Cuanto se le entiende a tu hijo cuando se comunica con otra persona?',
  LANGUAGE_DEVELOPMENT_MILESTONES: 'Hitos del Desarrollo del Lenguaje',
  GENERAL_INFORMATION: 'Información General',
  NEXT: 'Siguiente',
  DATE_PH: 'aaaa-mm',
  LANGUAGE_THERAPY_HOW_LONG: 'Cuanto tiempo?'
};

export default developmentHistoryLanguage;
