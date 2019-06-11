export interface IDevelopmentHistoryMotorLanguage {
  SEATS_ALONE: string;
  CRAWLS_ON_HANDS_AND_KNEES: string;
  WALKS_ALONE: string;
  STAIRS_WITHOUT_FALLING: string;
  RUNS_ALONE: string;
  MOTOR_SKILLS_COMPARED_TO_AGE_GROUP: string;
  FINE_COORDINATION: string;
  GENERAL_COORDINATION: string;
  DIFFICULTIES_WALKING: string;
  PREFERRED_HAND: string;
  PREFERRED_FOOT: string;
  DOMINANT_EYE: string;
  MILESTONES: string;
  GENERAL_INFORMATION: string;
  NEXT: string;
  DATE_PH: string;
}

const developmentHistoryMotor: IDevelopmentHistoryMotorLanguage = {
  SEATS_ALONE: 'Sentarse solo?',
  CRAWLS_ON_HANDS_AND_KNEES: 'Gatear en manos y rodillas?',
  WALKS_ALONE: 'Caminar solo?',
  STAIRS_WITHOUT_FALLING: 'Subir y bajar escalera sin caerse?',
  RUNS_ALONE: 'Correr Solo?',
  MOTOR_SKILLS_COMPARED_TO_AGE_GROUP:
    'Como describirias al desarrollo motor de su hijo en comparación con otros niños de su edad (normal, atrasado, avanzado)',
  FINE_COORDINATION: 'Como describiria su coordina fina? (normal, retrasado, avanzado)',
  GENERAL_COORDINATION: 'Considera su coordinacion general es: Pobre, suficiente, buena o excelente',
  DIFFICULTIES_WALKING: 'Tiene pie plano o alguna otra dificultar para caminar o correr?',
  PREFERRED_HAND: 'Que mano prefiere usar?',
  PREFERRED_FOOT: 'Que pie prefiere usar?',
  DOMINANT_EYE: 'Cual es el ojo dominante?',
  MILESTONES: 'Milestones of Motor Development',
  GENERAL_INFORMATION: 'Información General',
  NEXT: 'Siguiente',
  DATE_PH: 'aaaa-mm'
};

export default developmentHistoryMotor;
