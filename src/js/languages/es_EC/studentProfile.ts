export interface IStudentProfileLanguage {
  ENTER_INFORMATION_PERSONAL: string;
  DECLARE_INFORMATION_IS_REAL: string;
  NAME: string;
  LAST_NAME: string;
  BIRTH_DATE: string;
  GENDER: string;
  STUDENT_IS_ADOPTED: string;
  STUDENT_KNOW_IS_ADOPTED: string;
  AGE_OF_STUDENT_WHEN_ADOPTED: string;
  LANGUAGE_OF_STUDENT: string;
  DATE_FORMAT_PH: string;
  NEXT: string;
}

const studentProfile: IStudentProfileLanguage = {
  AGE_OF_STUDENT_WHEN_ADOPTED: 'Edad del niño cuando fue adoptado',
  BIRTH_DATE: 'Fecha de nacimiento',
  DATE_FORMAT_PH: 'dd-mm-aaaa',
  DECLARE_INFORMATION_IS_REAL: 'Declaro que la información contenida en el formulario es real.',
  ENTER_INFORMATION_PERSONAL:
    'Ingresa la información personal del estudiante, asegúrate que todos los datos sean reales y precisos.',
  GENDER: 'Género',
  LANGUAGE_OF_STUDENT: '¿Qué idioma usas con el estudiante?',
  LAST_NAME: 'Apellido',
  NAME: 'Nombre',
  NEXT: 'Siguiente',
  STUDENT_IS_ADOPTED: '¿El estudiante es adoptado?',
  STUDENT_KNOW_IS_ADOPTED: '¿El estudiante sabe que es adoptado?'
};

export default studentProfile;
