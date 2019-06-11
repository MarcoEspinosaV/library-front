export interface IParentInformationComponent {
  PARENT_EMAIL: string;
  PARENT_PROVINCE: string;
  PARENT_CITY: string;
  PARENT_POSTAL_CODE: string;
  PARENT_ADDRESS: string;
  PARENT_HOUSE_PHONE: string;
  PARENT_NAME: string;
  PARENT_PROFESSION: string;
  PARENT_CELLPHONE: string;
  PARENT_WORKPHONE: string;
  PARENT_DEMO_EMAIL: string;
  PARENT_DEMO_NAME: string;
  PARENT_DEMO_PROFESSION: string;
  PARENT_DEMO_CELLPHONE: string;
  PARENT_DEMO_WORKPHONE: string;
  PARENT_DEMO_PROVINCE: string;
  PARENT_DEMO_CITY: string;
  PARENT_DEMO_POSTAL_CODE: string;
  PARENT_DEMO_ADDRESS: string;
  PARENT_DEMO_HOUSE_PHONE: string;
  PARENT_INFORMATION: string;
}
export interface IStudentInformationComponent {
  STUDENT_BORN_DATE: string;
  STUDENT_GENDER: string;
  STUDENT_NAME: string;
  STUDENT_DEMO_BORN_DATE: string;
  STUDENT_DEMO_GENDER: string;
  STUDENT_DEMO_NAME: string;
  STUDENT_INFORMATION: string;
}
export interface ISiblingsInformationComponent {
  SIBLING_BORN_DATE: string;
  SIBLING_COURSE: string;
  SIBLING_DEMO_BORN_DATE: string;
  SIBLING_DEMO_COURSE: string;
  SIBLING_DEMO_NAME: string;
  SIBLING_DEMO_SCHOOL: string;
  SIBLING_INFORMATION: string;
  SIBLING_NAME: string;
  SIBLING_SCHOOL: string;
}
export interface IDocumentLanguage {
  AVAILABLE_VARS_FOR_DOCUMENT: string;
  CREATE_DOCUMENT: string;
  DOCUMENT_TYPE: string;
  NAME: string;
  NO_DOCUMENTS_DATA: string;
  YEAR: string;
  EDIT_DOCUMENT: string;
  SAVE: string;
  CANCEL: string;
  CLOSE: string;
  NOT_EXISTS_ENTRIES: string;
  EDIT_STRUCTURE: string;
  SELECT_DOCUMENT: string;
  SELECT_YEAR: string;
  ADD_BLOCK: string;
  PREVIEW: string;
  DELETE: string;
  CONTENT: string;
  CONFIG_COLUMNS: string;
  COLOR: string;
  DECORATION: string;
  WEIGHT: string;
  STYLE: string;
  LIST_CLASS: string;
  TITLE_HERE: string;
  ALIGN: string;
  SELECT_PAYMENT_METHOD: string;
  PAYMENT: string;
  AMOUNT: string;
  DUE: string;
  ADD_NAME: string;
  SIZE: string;
  PADDING: string;
  PARENTS_INFORMATION_COMPONENT: IParentInformationComponent;
  STUDENT_INFORMATION_COMPONENT: IStudentInformationComponent;
  SIBLING_INFORMATION_COMPONENT: ISiblingsInformationComponent;
}

const documents: IDocumentLanguage = {
  ADD_BLOCK: 'Añadir bloque',
  ADD_NAME: 'Agregar un nombre',
  ALIGN: 'Alinear',
  AMOUNT: 'Cantidad',
  AVAILABLE_VARS_FOR_DOCUMENT:
    'Puede emplear las siguientes variables en su documento copiando y pegando las mismas en el lugar que desea aparezca',
  CANCEL: 'Cancelar',
  CLOSE: 'Cerrar',
  COLOR: 'Color',
  CONFIG_COLUMNS: 'Configurar columnas',
  CONTENT: 'Contenido',
  CREATE_DOCUMENT: 'Crear nuevo',
  DECORATION: 'Decoración',
  DELETE: 'Eliminar',
  DOCUMENT_TYPE: 'Tipo de documento',
  DUE: 'Debido',
  EDIT_DOCUMENT: 'Editar',
  EDIT_STRUCTURE: 'Editar estructura',
  LIST_CLASS: 'Lista de clase',
  NAME: 'Nombre',
  NOT_EXISTS_ENTRIES: 'No existen entradas',
  NO_DOCUMENTS_DATA: 'No se han ingresado Documentos',
  PADDING: '',
  PARENTS_INFORMATION_COMPONENT: {
    PARENT_ADDRESS: 'Dirección',
    PARENT_CELLPHONE: 'Celular',
    PARENT_CITY: 'Ciudad',
    PARENT_DEMO_ADDRESS: 'Diego de Almagro y Pedro Ponce Carrasco',
    PARENT_DEMO_CELLPHONE: '0999999999',
    PARENT_DEMO_CITY: 'Quito',
    PARENT_DEMO_EMAIL: 'pedro@paktay.com',
    PARENT_DEMO_HOUSE_PHONE: '023453453',
    PARENT_DEMO_NAME: 'Pedro Jaramillo',
    PARENT_DEMO_POSTAL_CODE: 'EC5093',
    PARENT_DEMO_PROFESSION: 'Desarrollador',
    PARENT_DEMO_PROVINCE: 'Pichincha',
    PARENT_DEMO_WORKPHONE: '022233445',
    PARENT_EMAIL: 'Email',
    PARENT_HOUSE_PHONE: 'Teléfono del Domicilio',
    PARENT_INFORMATION: 'Información de los Padres',
    PARENT_NAME: 'Nombre',
    PARENT_POSTAL_CODE: 'Código Postal',
    PARENT_PROFESSION: 'Profesión',
    PARENT_PROVINCE: 'Provincia',
    PARENT_WORKPHONE: 'Teléfono del Trabajo'
  },
  PAYMENT: 'Relleno',
  PREVIEW: 'Preview',
  SAVE: 'Guardar',
  SELECT_DOCUMENT: 'Selecciona un documento',
  SELECT_PAYMENT_METHOD: 'Por favor seleccione el método de pago de su preferencia para continuar.',
  SELECT_YEAR: 'Selecciona un year',
  SIBLING_INFORMATION_COMPONENT: {
    SIBLING_BORN_DATE: 'Fecha de nacimiento',
    SIBLING_COURSE: 'Curso',
    SIBLING_DEMO_BORN_DATE: '27-07-2013',
    SIBLING_DEMO_COURSE: 'Primero de Básica',
    SIBLING_DEMO_NAME: 'Daniel Vásquez',
    SIBLING_DEMO_SCHOOL: 'Escuela Internacional de Londrés',
    SIBLING_INFORMATION: 'Información de los hermanos',
    SIBLING_NAME: 'Nombre del herman@',
    SIBLING_SCHOOL: 'Escuela en la que estudia'
  },
  SIZE: 'Tamaño',
  STUDENT_INFORMATION_COMPONENT: {
    STUDENT_BORN_DATE: 'Fecha de Nacimiento',
    STUDENT_DEMO_BORN_DATE: '13-10-2007',
    STUDENT_DEMO_GENDER: 'Femenino',
    STUDENT_DEMO_NAME: 'Maite Vásquez',
    STUDENT_GENDER: 'Género',
    STUDENT_INFORMATION: 'Información del Estudiante',
    STUDENT_NAME: 'Nombre Completo'
  },
  STYLE: 'Estilo',
  TITLE_HERE: 'Tu título va aquí',
  WEIGHT: 'Peso',
  YEAR: 'Año'
};

export default documents;
