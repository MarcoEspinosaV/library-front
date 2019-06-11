export interface IParentsInformationLanguage {
  REPRESENTATIVES: string;
  FIRST_REPRESENTATIVE: string;
  SECOND_REPRESENTATIVE: string;
  NAME: string;
  LAST_NAME: string;
  KINSHIP: string;
  SELECT_KINSHIP: string;
  CELL_PHONE: string;
  EMAIL: string;
  PROFESSION: string;
  WORK_PHONE: string;
  SINGLE_PARENT: string;
  INSTRUCTIONS_UPLOADER: string;
  SELECT_ARCHIVE: string;
  NEXT: string;
  PREVIEW: string;
  ENTER_INFORMATION_OF_REPRESENTATIVES: string;
  ADDRESS_FIRST_REPRESENTATIVE: string;
  ADDRESS_SECOND_REPRESENTATIVE: string;
  ADDRESS_REPRESENTATIVE: string;
  PROVINCE: string;
  SELECT_PROVINCE: string;
  CITY: string;
  POSTAL_CODE: string;
  ADDRESS: string;
  HOME_PHONE: string;
  LIVE_IN_DIFFERENT_LOCATION: string;
  REPRESENTATIVE_ECONOMIC: string;
  SELECT_REPRESENTATIVE_ECONOMIC: string;
  IDENTIFICATION: string;
  NAME_COMPLETE: string;
  DECLARE_INFORMATION_IS_REAL: string;
  DATE_PH: string;
  BIRTHDAY: string;
  LIVES_WHIT_WHOM: string;
}

const parentsInformation: IParentsInformationLanguage = {
  ADDRESS: 'Dirección',
  ADDRESS_FIRST_REPRESENTATIVE: 'Domicilio del primer representante',
  ADDRESS_REPRESENTATIVE: 'Domicilio del representante',
  ADDRESS_SECOND_REPRESENTATIVE: 'Domicilio del segundo representante',
  CELL_PHONE: 'Celular',
  CITY: 'Ciudad',
  DECLARE_INFORMATION_IS_REAL: 'Declaro que la información contenida en el formulario es real',
  EMAIL: 'correo electrónico',
  ENTER_INFORMATION_OF_REPRESENTATIVES:
    'Ingresa la información del o los representantes del estudiante, su entorno familiar, hermanos o más familiares que convivan con el estudiante.',
  FIRST_REPRESENTATIVE: 'Primer representante',
  HOME_PHONE: 'Teléfono domicilio',
  IDENTIFICATION: 'Identificación',
  INSTRUCTIONS_UPLOADER:
    ' Arrastra a esta zona el archivo en formato JPG o PNG o selecciona el archivo. Peso máximo 3Mb.',
  KINSHIP: 'Parentesco',
  LAST_NAME: 'Apellido',
  LIVE_IN_DIFFERENT_LOCATION: 'El segundo representante vive en una ubicación diferente',
  NAME: 'Nombre',
  NAME_COMPLETE: 'Nombre completo',
  NEXT: 'Siguiente',
  POSTAL_CODE: 'Código postal',
  PREVIEW: 'Anterior',
  PROFESSION: 'Profesión',
  PROVINCE: 'Provincia',
  REPRESENTATIVES: 'Representantes',
  REPRESENTATIVE_ECONOMIC: 'Representante económico',
  SECOND_REPRESENTATIVE: 'Segundo representante',
  SELECT_ARCHIVE: 'Seleccionar archivo',
  SELECT_KINSHIP: 'Seleccionar parentesco',
  SELECT_PROVINCE: 'Seleccionar provincia',
  SELECT_REPRESENTATIVE_ECONOMIC:
    'Selecciona el representante económico del estudiante, son los datos a nombre de quien se generará la factura.',
  SINGLE_PARENT: 'Soy padre/madre soltero(a)',
  WORK_PHONE: 'Teléfono trabajo',
  DATE_PH: 'aaaa-mm-dd',
  BIRTHDAY: 'Fecha de nacimiento',
  LIVES_WHIT_WHOM: 'Vive con quien?'
};

export default parentsInformation;
