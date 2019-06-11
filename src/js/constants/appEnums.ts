export interface IEnum {
  id: string | number;
  name: string | number;
  value?: string | number;
  [name: string]: any;
}

export const LANGUAGES: any = {
  en_US: {
    id: 'en_US',
    name: 'en_US',
    value: 'en_US'
  },
  es_EC: {
    id: 'es_EC',
    name: 'es_EC',
    value: 'es_EC'
  }
};

export const DOCUMENTS_TYPES: any = {
  APPLICATION: {
    id: 'APPLICATION',
    name_en_US: 'Application',
    name_es_EC: 'Aplicación'
  },
  CONTRACT: {
    id: 'CONTRACT',
    name_en_US: 'Contract',
    name_es_EC: 'Contrato'
  },
  CONTRACT_RETURNING: {
    id: 'CONTRACT_RETURNING',
    name_en_US: 'Contract returning',
    name_es_EC: 'Contrato Retornante'
  },
  HEALTH_HISTORY: {
    id: 'HEALTH_HISTORY',
    name_en_US: 'Health history',
    name_es_EC: 'Historial médico'
  },
  POLICIES_TODDLER: {
    id: 'POLICIES_TODDLER',
    name_en_US: 'Policies toddler',
    name_es_EC: 'Políticas de niños pequeños'
  },
  STATEMENT_OF_CONSENT: {
    id: 'STATEMENT_OF_CONSENT',
    name_en_US: 'Statement of consent',
    name_es_EC: 'Declaración de consentimiento'
  },
  VIDEO_RELEASE: {
    id: 'VIDEO_RELEASE',
    name_en_US: 'Video release',
    name_es_EC: 'Lanzamiento de videos'
  }
};

export const GENDERS: any = {
  FEMALE: {
    id: 'FEMALE',
    name_en_US: 'Female',
    name_es_EC: 'Femenino'
  },
  MALE: {
    id: 'MALE',
    name_en_US: 'Male',
    name_es_EC: 'Masculino'
  }
};

export const COURSES: any = {
  FIRST: {
    id: 1,
    name: 'First',
    value: 'FIRST'
  },
  SECOND: {
    id: 2,
    name: 'Second',
    value: 'SECOND'
  },
  THIRD: {
    id: 3,
    name: 'Third',
    value: 'THIRD'
  }
};

export const OPTION_REQUIRED: any = {
  FALSE: {
    id: false,
    name_en_US: 'Optional',
    name_es_EC: 'Opcional'
  },
  TRUE: {
    id: true,
    name_en_US: 'Required',
    name_es_EC: 'Requerido'
  }
};

export const COST_VIEW_TABS: any = [
  {
    id: 'COST',
    name_en_US: 'Cost',
    name_es_EC: 'Rubro'
  },
  {
    id: 'INITIAL_DEPOSIT',
    name_en_US: 'Initial deposit',
    name_es_EC: 'Depósito inicial'
  },
  {
    id: 'PAYMENT_TYPES',
    name_en_US: 'Payment types',
    name_es_EC: 'Tipo de pagos'
  }
];

export const DAYS_ENUM: any = [
  {
    id: 'MONDAY',
    name_en_US: 'Monday',
    name_es_EC: 'Lunes'
  },
  {
    id: 'TUESDAY',
    name_en_US: 'Tuesday',
    name_es_EC: 'Martes'
  },
  {
    id: 'WEDNESDAY',
    name_en_US: 'Wednesday',
    name_es_EC: 'Miercoles'
  },
  {
    id: 'THURSDAY',
    name_en_US: 'Thursday',
    name_es_EC: 'Jueves'
  },
  {
    id: 'FRIDAY',
    name_en_US: 'Friday',
    name_es_EC: 'Viernes'
  },
  {
    id: 'SATURDAY',
    name_en_US: 'Saturday',
    name_es_EC: 'Sábado'
  },
  {
    id: 'SUNDAY',
    name_en_US: 'Sunday',
    name_es_EC: 'Domingo'
  }
];

export const GROUP_NAV_TABS: any = [
  {
    id: 'CONFIG',
    name_en_US: 'Config',
    name_es_EC: 'Configuración'
  },
  {
    id: 'INCLUDE COST',
    name_en_US: 'Include cost',
    name_es_EC: 'Costos incluidos'
  }
];

export const KINSHIP: any = [
  {
    id: 'MOTHER',
    name_en_US: 'Mother',
    name_es_EC: 'Madre'
  },
  {
    id: 'FATHER',
    name_en_US: 'Father',
    name_es_EC: 'Padre'
  },
  {
    id: 'OTHER',
    name_en_US: 'Other',
    name_es_EC: 'Otro'
  }
];

export const CONTRACT_STATUS: any = {
  ACCEPTED: {
    id: 'ACCEPTED',
    name_en_US: 'Accepted',
    name_es_EC: 'Aceptada'
  },
  EXPIRED: {
    id: 'EXPIRED',
    name_en_US: 'Expired',
    name_es_EC: 'Expirada'
  },
  PENDING: {
    id: 'PENDING',
    name_en_US: 'Pending',
    name_es_EC: 'Pendiente'
  },
  REJECTED: {
    id: 'REJECTED',
    name_en_US: 'Rejected',
    name_es_EC: 'Rechazada'
  },
  SENT: {
    id: 'SENT',
    name_en_US: 'Send',
    name_es_EC: 'Enviada'
  }
};

export const STUDENT_TABS_ALLOCATION_QUOTAS: any = [
  {
    id: 'PERSONALITIES_COST',
    name_en_US: 'Personalities cost',
    name_es_EC: 'Costos personalizados'
  },
  {
    id: 'REGISTERED_SIBLINGS',
    name_en_EC: 'Registered siblings',
    name_es_EC: 'Hermanos inscritos'
  },
  {
    id: 'PREVIOUS_GROUPS',
    name_en_US: 'Previous groups',
    name_es_EC: 'Grupos previos'
  },
  {
    id: 'CURRENT_GROUPS',
    name_en_US: 'Current groups',
    name_es_EC: 'Grupos actuales'
  }
];

export const AM_PM_OPTION: any = {
  AM: {
    id: 'AM',
    name_en_US: 'am',
    name_es_EC: 'am'
  },
  PM: {
    id: 'PM',
    name_en_US: 'pm',
    name_es_EC: 'pm'
  }
};

export const TRUE_FALSE: any = {
  TRUE: {
    id: true,
    name_en_US: 'Yes',
    name_es_EC: 'Si'
  },
  // tslint:disable-next-line:object-literal-sort-keys
  FALSE: {
    id: false,
    name_en_US: 'No',
    name_es_EC: 'No'
  }
};

export const RELATIONS: any = {
  BAD: {
    id: 'BAD',
    name_en_US: 'Bad',
    name_es_EC: 'Mala'
  },
  REGULAR: {
    id: 'REGULAR',
    name_en_US: 'Regular',
    name_es_EC: 'Regular'
  },
  // tslint:disable-next-line:object-literal-sort-keys
  GOOD: {
    id: 'GOOD',
    name_en_US: 'Good',
    name_es_EC: 'Buena'
  }
};

export const RELIGION_OPTIONS: any = {
  NO: {
    id: 'NO',
    name_en_US: 'No',
    name_es_EC: 'No'
  },
  YES: {
    id: 'YES',
    name_en_US: 'Yes',
    name_es_EC: 'Si'
  }
};

export const APPLICATION_STATUS: any = {
  COMPLETED: {
    id: 'COMPLETED',
    name_en_US: 'Comleted',
    name_es_EC: 'Completa'
  },
  PENDING: {
    id: 'PENDING',
    name_en_US: 'Incomplete',
    name_es_EC: 'Incompleta'
  }
};

export const MARITAL_STATUS: any = {
  MARRIED: {
    id: 'MARRIED',
    name_en_US: 'Married / Living together',
    name_es_EC: 'Casado / Viviendo juntos'
  },
  SEPARATED: {
    id: 'SEPARATED',
    name_en_US: 'Separated / Divorced',
    name_es_EC: 'Separado / Divorciado'
  },
  SINGLE: {
    id: 'SINGLE',
    name_en_US: 'Single',
    name_es_EC: 'Soltero'
  }
};
