export interface IAllocationQuotasLanguage {
  ADVANCED_FILTER: string;
  AGE_RANGE: string;
  ALLOCATION_OF_QUOTAS: string;
  APPLYING_STUDENTS: string;
  ASSIGN_QUOTAS_BUTTON: string;
  AVAILABLE: string;
  CANCEL: string;
  CARD: {
    AGE: string;
    AGE_TO_START: string;
    APPLICATION: string;
    BROTHERS_SUBSCRIBE: string;
    CURRENT_GROUPS_TOOLTIP: string;
    DELETE: string;
    MONT_ABBR: string;
    PREVIOUS_GROUP_TOOLTIP: string;
    YEAR_ABBR: string;
    STATUS: {
      PENDING: string;
      ACCEPTED: string;
      REJECTED: string;
      SENT: string;
      EXPIRED: string;
      [name: string]: string;
    };
    VIEW_STUDENT_FILE: string;
    NO_COSTS_HAVE_BEEN_ENTERED: string;
    ITEM: string;
    COST: string;
    DISCOUNT: string;
    DISCOUNT_VALUE: string;
    FINAL_VALUE: string;
  };
  CLEAR_FILTERS: string;
  COMPOSITION_GROUP: string;
  DROP_HERE_STUDENTS: string;
  FILTER_STUDENTS: string;
  GROUP_TO_TENDER: string;
  INSCRIPTION: string;
  MODAL_CONFIRM_REMOVE_STUDENT: {
    CANCEL: string;
    DELETE: string;
    REMOVE_STUDENT_OF_GROUP: string;
    REMOVE_STUDENT_OF_GROUP_DESCRIPTION: string;
  };
  MODAL_DELETE_QUOTA: {
    CANCEL: string;
    DELETE_BUTTON: string;
    DELETE_QUOTA_DESCRIPTION: string;
    DELETE_QUOTA_TITLE: string;
  };
  MODAL_INFO: {
    BROTHERS_SUBSCRIBE: string;
    CANCEL: string;
    CURRENT_GROUPS: string;
    CURRENT_YEARS: string;
    CUSTOM_COST: string;
    MONTH: string;
    PREVIOUS_GROUP: string;
    VIEW_STUDENT_RECORD: string;
    NOT_SIBLINGS_ENROLLED: string;
    NO_CURRENT_GROUPS: string;
    NO_PREVIOUS_GROUPS: string;
    YEAR: string;
    YEARS_TO_START: string;
  };
  MODAL_INVALID_QUOTAS: {
    ACCEPT: string;
    INVALID_QUOTAS: string;
    INVALID_QUOTAS_DESCRIPTION: string;
  };
  MODAL_SEND_QUOTAS: {
    CANCEL: string;
    SEND_BUTTON: string;
    SEND_QUOTAS_DESCRIPTION: string;
    SEND_QUOTAS_TITLE: string;
  };
  MODAL_STUDENT_QUOTAS: {
    AGE_TO_START: string;
    CANCEL: string;
    CURRENT_AGE: string;
    SAVE: string;
    VIEW_STUDENT_DETAIL: string;
  };
  NEW_STUDENTS: string;
  OLD_STUDENTS: string;
  ORDER_BY: string;
  PREVIOUS_GROUP: string;
  PREVIOUS_GROUP_PH: string;
  PROGRESS_MAN_LABEL: string;
  PROGRESS_WOMAN_LABEL: string;
  SCHOOL_YEAR: string;
  SCHOOL_YEAR_PH: string;
  SEARCH_STUDENT: string;
  SELECTED: string;
  SELECT_ALL: string;
  SELECT_A_GROUP: string;
  SELECT_A_GROUP_FOR_QUOTAS: string;
  SELECT_A_GROUP_FOR_QUOTAS_PH: string;
  SELECT_STUDENTS_TO_TENDER_ASIDE: string;
  SELECT_THE_STUDENTS_TO_TENDER_QUOTAS: string;
  SEND_QUOTAS_BUTTON: string;
  STUDENTS: string;
  SUBSCRIBE_STUDENTS: string;
  TENDER_QUOTAS_BUTTON: string;
  UNSELECT_ALL: string;
}

const allocationQuotas: IAllocationQuotasLanguage = {
  ADVANCED_FILTER: 'Filtros Avanzados',
  AGE_RANGE: 'Rango de edad',
  ALLOCATION_OF_QUOTAS: 'Asignación de cupos',
  APPLYING_STUDENTS: 'Estudiantes Aplicando',
  ASSIGN_QUOTAS_BUTTON: 'Asignar cupos',
  AVAILABLE: 'Disponibles',
  CANCEL: 'Cancelar',
  CARD: {
    AGE: 'Edad actual',
    AGE_TO_START: 'Edad al iniciar el curso',
    APPLICATION: 'Aplicación',
    BROTHERS_SUBSCRIBE: 'Hermanos inscritos',
    CURRENT_GROUPS_TOOLTIP: 'Grupos actuales',
    DELETE: 'Eliminar',
    MONT_ABBR: 'meses',
    PREVIOUS_GROUP_TOOLTIP: 'Grupos previos',
    STATUS: {
      ACCEPTED: 'ACEPTADA',
      EXPIRED: 'EXPIRADA',
      PENDING: 'PENDIENTE',
      REJECTED: 'RECHAZADA',
      SENT: 'ENVIADA'
    },
    VIEW_STUDENT_FILE: 'Ver ficha del estudiante',
    YEAR_ABBR: 'años',
    NO_COSTS_HAVE_BEEN_ENTERED: 'No se han registrado costos',
    ITEM: 'Rubro',
    COST: 'Costo',
    DISCOUNT: 'Descuento',
    DISCOUNT_VALUE: '0%',
    FINAL_VALUE: 'Valor final'
  },
  CLEAR_FILTERS: 'Borrar filtros',
  COMPOSITION_GROUP: 'Composición del grupo',
  DROP_HERE_STUDENTS:
    'Arrastra a esta zona o selecciona en el listado a los estudiantes que deseas ofertar los cupos disponibles',
  FILTER_STUDENTS: 'Filtrar a los estudiantes',
  GROUP_TO_TENDER: 'Nivel · grupo a ofertar',
  INSCRIPTION: 'Inscripción',
  MODAL_CONFIRM_REMOVE_STUDENT: {
    CANCEL: 'Cancelar',
    DELETE: 'Eliminar',
    REMOVE_STUDENT_OF_GROUP: 'Eliminar estudiante del grupo',
    REMOVE_STUDENT_OF_GROUP_DESCRIPTION:
      'Al realizar esta acción se eliminará toda la información actual del estudiante <strong>{{studentName}}</strong> en este grupo, incluyendo costos personalizados y documentos enviados'
  },
  MODAL_DELETE_QUOTA: {
    CANCEL: 'Cancelar',
    DELETE_BUTTON: 'Eliminar',
    DELETE_QUOTA_DESCRIPTION: 'Estás a punto de eliminar el cupo ofertado a [name]. ¿Deseas continuar?',
    DELETE_QUOTA_TITLE: 'Eliminar cupo ofertado'
  },
  MODAL_INFO: {
    BROTHERS_SUBSCRIBE: 'Hermanos inscritos',
    CANCEL: 'Cancelar',
    CURRENT_GROUPS: 'Grupos actuales',
    CURRENT_YEARS: 'Edad actual',
    CUSTOM_COST: 'Costos personalizados',
    MONTH: 'meses',
    NOT_SIBLINGS_ENROLLED: 'No se encuentran hermanos inscritos',
    NO_CURRENT_GROUPS: 'No hay grupos actuales',
    NO_PREVIOUS_GROUPS: 'No hay grupos previos',
    PREVIOUS_GROUP: 'Grupos previos',
    VIEW_STUDENT_RECORD: 'Ver  ficha del estudiante',
    YEAR: 'años',
    YEARS_TO_START: 'Edad al inicio del curso'
  },
  MODAL_INVALID_QUOTAS: {
    ACCEPT: 'Aceptar',
    INVALID_QUOTAS: 'A excedido la capacidad',
    INVALID_QUOTAS_DESCRIPTION:
      'El número de estudiantes supera la capacidad disponibles en el grupo, para aumentar la misma diríjase a las configuraciones del grupo'
  },
  MODAL_SEND_QUOTAS: {
    CANCEL: 'Cancelar',
    SEND_BUTTON: 'Enviar',
    SEND_QUOTAS_DESCRIPTION: 'Enviarás una oferta de cupo a [studentCount] estudiantes para [group]. ¿Estas seguro?',
    SEND_QUOTAS_TITLE: 'Enviar cupos'
  },
  MODAL_STUDENT_QUOTAS: {
    AGE_TO_START: 'edad al inicio del curso',
    CANCEL: 'Cancelar',
    CURRENT_AGE: 'Edad Actual',
    SAVE: 'Guardar',
    VIEW_STUDENT_DETAIL: 'Ver ficha del studiante'
  },
  NEW_STUDENTS: 'Estudiantes nuevos',
  OLD_STUDENTS: 'Estudiantes existentes',
  ORDER_BY: 'Ordenar por',
  PREVIOUS_GROUP: 'Nivel · grupo previo',
  PREVIOUS_GROUP_PH: 'Selecciona el grupo',
  PROGRESS_MAN_LABEL: 'niños',
  PROGRESS_WOMAN_LABEL: 'niñas',
  SCHOOL_YEAR: 'Año lectivo',
  SCHOOL_YEAR_PH: 'Selecciona el año lectivo',
  SEARCH_STUDENT: 'Buscar estudiante',
  SELECTED: 'Seleccionados',
  SELECT_ALL: 'Seleccionar todos',
  SELECT_A_GROUP: 'Selecciona el grupo en el que vas a ofertar los cupos',
  SELECT_A_GROUP_FOR_QUOTAS: 'Nivel · grupo a ofertar',
  SELECT_A_GROUP_FOR_QUOTAS_PH: 'Selecciona el grupo',
  SELECT_STUDENTS_TO_TENDER_ASIDE: 'Selecciona el grupo',
  SELECT_THE_STUDENTS_TO_TENDER_QUOTAS: 'Selecciona a los estudiantes a quienes vas a ofertar el cupo',
  SEND_QUOTAS_BUTTON: 'Enviar cupos',
  STUDENTS: 'Estudiantes',
  SUBSCRIBE_STUDENTS: 'Estudiantes inscritos',
  TENDER_QUOTAS_BUTTON: 'Ofertar cupos',
  UNSELECT_ALL: 'Deseleccionar todos'
};

export default allocationQuotas;
