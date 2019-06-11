export interface IHomeMaritalStatusLanguage {
  CIVIL_STATUS: string;
  SEPARATED_WHEN: string;
  CUSTODY_ARRANGEMENTS: string;
  EXPLANATION: string;
  PARENTS_MARITAL_STATUS: string;
  DATE_FORMAT_PH: string;
  NEXT: string;
  SELECT_MARITAL_STATUS: string;
}

const homeMaritalStatus: IHomeMaritalStatusLanguage = {
  CIVIL_STATUS: 'Estado civil',
  CUSTODY_ARRANGEMENTS: 'Arreglos de custodia?',
  EXPLANATION: 'Explicación',
  SEPARATED_WHEN: 'Si esta separado, cuando fue?',
  PARENTS_MARITAL_STATUS: 'Estado civil de los padres',
  DATE_FORMAT_PH: 'dd-mm-aaaa',
  NEXT: 'Siguiente',
  SELECT_MARITAL_STATUS: 'Selecciona tu estado civil actual'
};

export default homeMaritalStatus;
