export interface ILoginLanguage {
  ACCESS_SCHOOL: string;
  ACCESS_TO_ACCOUNT: string;
  BACK_TO_LOGIN: string;
  CHANGE_PASSWORD: string;
  EMAIL_LABEL: string;
  EMAIL_PLACEHOLDER: string;
  FORGET_PASSWORD: string;
  HELLO: string;
  INVALID_INVITATION_TOKEN_DESCRIPTION: string;
  INVALID_TOKEN_DESCRIPTION: string;
  INVALID_TOKEN_TITLE: string;
  LOGIN: string;
  LOGIN_BUTTON: string;
  NEXT: string;
  PASSWORD_LABEL: string;
  PASSWORD_PLACEHOLDER: string;
  RECOVERY_PASSWORD: string;
  RECOVERY_PASSWORD_BUTTON: string;
  RECOVERY_PASSWORD_SUCCESS_DESCRIPTION: string;
  RECOVERY_PASSWORD_SUCCESS_TITLE: string;
  REPEAT_PASSWORD: string;
  SCHOOL_SENDING_INVITATION: string;
  START_STUDENT_APPLICATION: string;
  SUCCESS_SEND_MESSAGE: string;
  SUCCESS_SEND_TITLE: string;
  WELCOME_TO_LIBRARY: string;
  CREATE_PASSWORD: string;
}

const login: ILoginLanguage = {
  ACCESS_SCHOOL: 'Accede a la escuela [schoolName] con tu cuenta de Idukay',
  ACCESS_TO_ACCOUNT: 'Accede a la biblioteca con tu cuenta universitaria',
  BACK_TO_LOGIN: 'Regresar al inicio',
  CHANGE_PASSWORD: 'Cambiar Contraseña',
  CREATE_PASSWORD: 'Crea tu nueva contraseña para acceder a tu cuenta de Idukay',
  EMAIL_LABEL: 'Email',
  EMAIL_PLACEHOLDER: 'ejm.: clark.kent@gmail.com',
  FORGET_PASSWORD: '¿Olvidaste tu contraseña?',
  HELLO: 'Hola',
  INVALID_INVITATION_TOKEN_DESCRIPTION: 'La invitación ha caducado o es inválida',
  INVALID_TOKEN_DESCRIPTION: 'El enlace para recuperar la contraseña ha caducado',
  INVALID_TOKEN_TITLE: 'Token Inválido',
  LOGIN: 'Iniciar sesión',
  LOGIN_BUTTON: 'Ingresar',
  NEXT: 'Siguiente',
  PASSWORD_LABEL: 'Contraseña',
  PASSWORD_PLACEHOLDER: '',
  RECOVERY_PASSWORD: 'Recuperar Contraseña',
  RECOVERY_PASSWORD_BUTTON: 'Recuperar',
  RECOVERY_PASSWORD_SUCCESS_DESCRIPTION: 'A paratir de este momento podrá acceder a su cuenta con su nueva contraseña',
  RECOVERY_PASSWORD_SUCCESS_TITLE: 'Contraseña actualizada',
  REPEAT_PASSWORD: 'Repetir contraseña',
  SCHOOL_SENDING_INVITATION: ' envió una invitación para que registres tus datos',
  START_STUDENT_APPLICATION: 'Empieza creando tu contraseña',
  SUCCESS_SEND_MESSAGE: 'Por favor revise su correo, le hemos las instrucciones para recuperar su contraseña',
  SUCCESS_SEND_TITLE: 'Solicitud enviada con éxito',
  WELCOME_TO_LIBRARY: 'Bienvenido a library'
};

export default login;
