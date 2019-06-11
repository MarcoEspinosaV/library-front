export interface IDevelopmentHistoryTraitsLanguage {
  FRUSTRATION_HANDLING: string;
  WHO_IS_IN_CHARGE_OF_DISCIPLINE: string;
  BEHAVIOUR_CONTROL_METHOD: string;
  REACTION_TO_BEHAVIOUR_CONTROL_METHOD: string;
  PERSONAL_TRAIT_MOST_LIKED: string;
  DESCRIPTION: string;
  NEXT: string;
}

const developmentHistoryTraits: IDevelopmentHistoryTraitsLanguage = {
  FRUSTRATION_HANDLING: 'Como maneja tu hijo la frustración?',
  WHO_IS_IN_CHARGE_OF_DISCIPLINE: 'Quien esta a cargo de la disciplina del niño?',
  BEHAVIOUR_CONTROL_METHOD: 'Metodo de control del comportamiento usado en el hogar? Les funciona?',
  REACTION_TO_BEHAVIOUR_CONTROL_METHOD: 'Reaccion habitual ante el control de comportamiento?',
  PERSONAL_TRAIT_MOST_LIKED: 'Razgo de la personalidad de tu hijo que mas te agrada?',
  DESCRIPTION: 'Como describirias a tu hijo?',
  NEXT: 'Siguiente'
};

export default developmentHistoryTraits;
