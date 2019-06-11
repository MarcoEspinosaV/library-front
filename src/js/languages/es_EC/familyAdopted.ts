export interface IFamilyAdoptedLanguage {
  STUDENT_IS_ADOPTED: string;
  STUDENT_KNOW_IS_ADOPTED: string;
  AGE_OF_STUDENT: string;
  LANGUAGE_OF_STUDENT: string;
  NEXT: string;
}

const familyAdopted: IFamilyAdoptedLanguage = {
  AGE_OF_STUDENT: 'Edad del niño cuando fue adoptado',
  LANGUAGE_OF_STUDENT: '¿Qué idioma usas con el estudiante?',
  NEXT: 'Siguiente',
  STUDENT_IS_ADOPTED: '¿El estudiante es adoptado?',
  STUDENT_KNOW_IS_ADOPTED: '¿El estudiante sabe que es adoptado?'
};

export default familyAdopted;
