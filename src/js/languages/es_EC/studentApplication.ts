export interface IStudentApplicationLanguage {
  PERSONAL_DATA: string;
  STUDENT_DATA: string;
  CONFIRM_INSCRIPTION: string;
  STUDENT_APPLICATION: string;
  STUDENT_APPLICATION_MESSAGE_FORM: string;
  FOR_PROCESS_YOUR_INSCRIPTION: string;
  NEXT_STEP: string;
  FILL_REPRESENTATIVE_LEGAL_INFORMATION: string;
  FIRST_REPRESENTATIVE_LEGAL: string;
  NAME: string;
  LAST_NAME: string;
  KINSHIP: string;
  SELECT_KINSHIP: string;
  CELL_PHONE: string;
  EMAIL: string;
  PROFESSION: string;
  WORK_PHONE: string;
  SINGLE_PARENT: string;
  SECOND_REPRESENTATIVE_LEGAL: string;
  PROVINCE: string;
  SELECT_PROVINCE: string;
  CITY: string;
  SELECT_CITY: string;
  POSTAL_CODE: string;
  ADDRESS: string;
  HOME_PHONE: string;
  LIVE_IN_DIFFERENT_LOCATION: string;
  ADDRESS_FIRST_REPRESENTATIVE: string;
  ADDRESS_SECOND_REPRESENTATIVE: string;
  FILL_STUDENT_DATA: string;
  GENDER: string;
  DATE_BORN: string;
  PRESCHOOL: string;
  TODDLERS: string;
  INFANT: string;
  STUDIES_PLAN: string;
  CHOOSE_DATE: string;
  INSCRIPTION_DATE: string;
  STUDY_PROGRAM: string;
  REGISTERED_SIBLINGS: string;
  SIBLING_NAME: string;
  COURSE: string;
  DELETE: string;
  ADD: string;
  DATE_PLACEHOLDER: string;
  VERIFY_ENTERED_DATA: string;
  COMPLETE_NAME: string;
  ACADEMIC_INFORMATION: string;
  ACCEPT_FORM_DATA_IS_REAL: string;
  INVALID_ARCHIVE: string;
  PROFILE_PHOTO: string;
  INSTRUCTIONS_UPLOADER: string;
  SELECT_ARCHIVE: string;
  STUDY_IN_SAME_SCHOOL: string;
  SCHOOL_WHERE_STUDY: string;
  STUDENT_HAVE_SIBLINGS: string;
  FILL_THIS_INFORMATION_SIBLINGS: string;
  SENT_APPLICATION: string;
  MESSAGE_SUCCESS_SENT_APPLICATION: string;
  SEND_EMAIL_WITH_INFORMATION: string;
  PREVIOUS: string;
  FINALIZE: string;
  OTHER: string;
  SELECT_ALL: string;
  LEVELS: string;
}

const studentApplication: IStudentApplicationLanguage = {
  ACADEMIC_INFORMATION: 'Información académica',
  ACCEPT_FORM_DATA_IS_REAL: 'Al dar click en Siguiente acepto que todos los datos en el formulario son reales',
  ADD: 'AGREGAR',
  ADDRESS: 'Dirección',
  ADDRESS_FIRST_REPRESENTATIVE: 'Domicilio del primer representante',
  ADDRESS_SECOND_REPRESENTATIVE: 'Domicilio del segundo representante',
  CELL_PHONE: 'Celular',
  CHOOSE_DATE: 'Elige la fecha en la que deseas que el estudiante ingrese a la institución.',
  CITY: 'Ciudad',
  COMPLETE_NAME: 'Nombre completo',
  CONFIRM_INSCRIPTION: 'Confirmación',
  COURSE: 'Curso',
  DATE_BORN: 'Fecha de nacimiento',
  DATE_PLACEHOLDER: 'aaaa-mm-dd',
  DELETE: 'Eliminar',
  EMAIL: 'Correo electrónico',
  FILL_REPRESENTATIVE_LEGAL_INFORMATION: 'Llena los datos del representate legal del estudiante',
  FILL_STUDENT_DATA: 'Llena los datos del estudiante',
  FILL_THIS_INFORMATION_SIBLINGS: 'Llena esta sección en caso de que el estudiante tenga hermanos(as).',
  FINALIZE: 'Finalizar',
  FIRST_REPRESENTATIVE_LEGAL: 'Primer representante',
  FOR_PROCESS_YOUR_INSCRIPTION: 'Para procesar tu inscripción deberás realizar el pago del formulario.',
  GENDER: 'Género',
  HOME_PHONE: 'Teléfono de casa',
  INFANT: 'Infantil',
  INSCRIPTION_DATE: 'Fecha de inscripción',
  INSTRUCTIONS_UPLOADER:
    ' Arrastra a esta zona el archivo en formato JPG o PNG o selecciona el archivo. Peso máximo 3Mb.',
  INVALID_ARCHIVE: 'Archivo invalido',
  KINSHIP: 'Parentesco',
  LAST_NAME: 'Apellido',
  LEVELS: 'Niveles',
  LIVE_IN_DIFFERENT_LOCATION: 'El segundo representante vive en una ubicación diferente',
  MESSAGE_SUCCESS_SENT_APPLICATION:
    'Felicitaciones [name], la aplicación del estudiante [studentName] para el [schoolName] se envió exitosamente',
  NAME: 'Nombre',
  NEXT_STEP: 'Siguiente',
  OTHER: 'Otro...',
  PERSONAL_DATA: 'Datos Personales',
  POSTAL_CODE: 'Código postal',
  PRESCHOOL: 'Preescolar',
  PREVIOUS: 'Anterior',
  PROFESSION: 'Profesión',
  PROFILE_PHOTO: 'Foto de perfil',
  PROVINCE: 'Provincia',
  REGISTERED_SIBLINGS: 'Hermanos registrados',
  SCHOOL_WHERE_STUDY: 'Colegio en el que estudia',
  SECOND_REPRESENTATIVE_LEGAL: 'Segundo representante legal',
  SELECT_ALL: 'Todos',
  SELECT_ARCHIVE: 'Seleccionar archivo',
  SELECT_CITY: 'Seleccionar ciudad',
  SELECT_KINSHIP: 'Seleccionar parentesco',
  SELECT_PROVINCE: 'Selecciona la provincia',
  SEND_EMAIL_WITH_INFORMATION: 'Muy pronto te enviaremos un email con información…',
  SENT_APPLICATION: '¡Aplicación enviada!',
  SIBLING_NAME: 'Nombre completo del hermano',
  SINGLE_PARENT: 'Soy padre / madre soltero(a)',
  STUDENT_APPLICATION: 'Aplicación del estudiante',
  STUDENT_APPLICATION_MESSAGE_FORM:
    'A continuación encontrarás el formulario de aplicación estudiantil para el colegio',
  STUDENT_DATA: 'Datos del estudiante',
  STUDENT_HAVE_SIBLINGS: '¿El estudiante tiene hermanos?',
  STUDIES_PLAN: 'Plan de estudios',
  STUDY_PROGRAM: 'Clase o programa al que deseas aplicar*',
  STUDY_IN_SAME_SCHOOL: 'Estudia en la misma escuela',
  TODDLERS: 'Niños pequeños',
  VERIFY_ENTERED_DATA: 'Verifica los datos ingresados en el formulario y confirma que son correctos.',
  WORK_PHONE: 'Teléfono del trabajo'
};

export default studentApplication;
