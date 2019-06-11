export interface IAlertsLanguage {
  SUCCESS_CREATE_TITLE: string;
  SUCCESS_SAVE_TITLE: string;
  SUCCESS_CREATE_DESCRIPTION: string;
  SUCCESS_SAVE_DESCRIPTION: string;
  WARNING_DESCRIPTION: string;
  WARNING_TITLE: string;
}

const alert: IAlertsLanguage = {
  SUCCESS_CREATE_DESCRIPTION: 'La información se ha guardado satisfactoriamente',
  SUCCESS_CREATE_TITLE: 'ITEM CREADO CON ÉXITO',
  SUCCESS_SAVE_DESCRIPTION: 'La información se ha actualizado satisfactoriamente',
  SUCCESS_SAVE_TITLE: 'INFORMACIÓN ACTUALIZADA',
  WARNING_DESCRIPTION: 'Existió un error en su requerimiento',
  WARNING_TITLE: '¡ATENCIÓN!'
};

export default alert;
