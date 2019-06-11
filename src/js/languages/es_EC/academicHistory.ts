export interface IFormAcademicHistoryLanguage {
  AGE_GO_TO_SCHOOL_FIRST_TIME: string;
  HAVE_SCHOOL_CHANGED: string;
  ADAPTATION_PROCESS_STUDENT: string;
  ACADEMIC_ACHIEVEMENT_OF_STUDENT: string;
  IS_REPEAT_ANY_SCHOOL_YEAR: string;
  PSYCHOLOGICAL_SUPPORT: string;
  PSYCHOLOGICAL_REPORTS: string;
  CURRENT_ACADEMIC_AVERAGE: string;
  STUDENT_HAVE_STUDY_PROBLEMS: string;
  STUDY_RESPONSIBILITY: string;
  HAVE_CONCENTRATION_PROBLEMS: string;
  EASY_SUBJECTS_STUDENT: string;
  DIFFICULT_SUBJECTS_STUDENT: string;
  RECEIVED_EXTRACURRICULAR_SUPPORT: string;
  REASON_RECEIVED_EXTRACURRICULAR_SUPPORT: string;
  ATTENDED_LEARNING_THERAPY: string;
  RELATE_STUDENT_WHIT_TEACHERS: string;
  IS_EASY_FOLLOW_SCHOOL_RULES: string;
  HAVE_DISCIPLINARY_REPORTS: string;
  HAVE_DISCIPLINARY_REPORTS_REASON: string;
  RELATE_CLASSMATES: string;
  VICTIM_BULLYING_AT_SCHOOL: string;
  GENERAL_OBSERVATIONS: string;
  COMMENTS_ABOUT_CHILD_IN_SCHOOL: string;
  DESCRIBE_REASON_AND_HOW_LONG: string;
  NEXT: string;
  ATTENDED_LEARNING_THERAPY_REASON: string;
  ATTENDED_LEARNING_THERAPY_HOW_LONG: string;
}

const academicHistory: IFormAcademicHistoryLanguage = {
  ACADEMIC_ACHIEVEMENT_OF_STUDENT: '¿Cómo ha sido su aprovechamiento académico en los diferentes años escolares?',
  ADAPTATION_PROCESS_STUDENT: '¿Cómo ha sido su proceso de adaptación?',
  AGE_GO_TO_SCHOOL_FIRST_TIME: '¿A qué edad fue por primera vez a la escuela?',
  ATTENDED_LEARNING_THERAPY: 'Ha asistido a terapia de aprendizaje',
  COMMENTS_ABOUT_CHILD_IN_SCHOOL: 'Comentarios sobre su hijo en el colegio',
  CURRENT_ACADEMIC_AVERAGE: '¿Cuál es el promedio académico actual del niño?',
  DESCRIBE_REASON_AND_HOW_LONG: 'Describa la razón y por cuanto tiempo',
  DIFFICULT_SUBJECTS_STUDENT: '¿Qué materias le cuestan trabajo al estudiante?',
  EASY_SUBJECTS_STUDENT: '¿Qué materias se le facilitan al estudiante?',
  GENERAL_OBSERVATIONS: 'Observaciones generales del niño',
  HAVE_CONCENTRATION_PROBLEMS:
    '¿Considera que su hijo tiene dificultad para concetrarse al momento de estudiar o hacer tareas?',
  HAVE_DISCIPLINARY_REPORTS: '¿Ha tenido reportes disciplinares?',
  HAVE_SCHOOL_CHANGED: '¿Ha tenido cambios de escuela? Explique el motivo',
  IS_EASY_FOLLOW_SCHOOL_RULES: '¿Le es facil seguir las reglas del colegio?',
  IS_REPEAT_ANY_SCHOOL_YEAR: '¿Ha repetido algun año escolar?',
  NEXT: 'Siguiente',
  PSYCHOLOGICAL_REPORTS: 'Informes de evaluacion psicologica y psicopedagogica',
  PSYCHOLOGICAL_SUPPORT: '¿Ha requerido apoyo psicológico o psicopedagógico?',
  REASON_RECEIVED_EXTRACURRICULAR_SUPPORT: '¿Porque motivo? ¿Durante cuanto tiempo?',
  RECEIVED_EXTRACURRICULAR_SUPPORT: '¿Ha recibido algun tipo de apoyo extra escolar?',
  RELATE_CLASSMATES: '¿Comó se relaciona con sus compañeros?',
  RELATE_STUDENT_WHIT_TEACHERS: '¿Cómo se relaciona con sus maestros y figuras de autoridad?',
  STUDENT_HAVE_STUDY_PROBLEMS: '¿Considera que tiene problemas para el estudio?',
  STUDY_RESPONSIBILITY: '¿Qué tan responsable es en sus tareas escolares y estudio en general?',
  VICTIM_BULLYING_AT_SCHOOL: '¿Ha sido víctima de bullying en el colegio?',
  ATTENDED_LEARNING_THERAPY_HOW_LONG: 'Cuanto tiempo?',
  ATTENDED_LEARNING_THERAPY_REASON: 'Razon',
  HAVE_DISCIPLINARY_REPORTS_REASON: 'Razon'
};

export default academicHistory;
