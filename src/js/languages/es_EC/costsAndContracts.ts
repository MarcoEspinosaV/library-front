export interface ICostsAndContractsLabels {
  ADDITIONAL_COSTS: string;
  NEXT: string;
  REFUSE_FIT: string;
  SELECT_OPTIONAL_COSTS: string;
  OBLIGATORY_COSTS: string;
  TOTAL: string;
  PAYMENT_TYPES: string;
  ACCEPTANCE_CONTRACT: string;
  TERMS_OF_CONTRACT: string;
  PAYMENTS: string;
  WEIGHT: string;
  EXPIRE: string;
  MUST_ACCEPT_CONTRACT_TERMS: string;
  INITIAL_DEPOSIT: string;
}

const costsAndContracts: ICostsAndContractsLabels = {
  ACCEPTANCE_CONTRACT: 'Contrato de aceptación',
  ADDITIONAL_COSTS: 'Costos adicionales',
  EXPIRE: 'Vence',
  INITIAL_DEPOSIT: 'Depósito inicial no reembolsable',
  MUST_ACCEPT_CONTRACT_TERMS: 'Debes aceptar los términos del contrato',
  NEXT: 'Siguiente',
  OBLIGATORY_COSTS: 'Rubros obligatorios',
  PAYMENTS: 'Pagos',
  PAYMENT_TYPES: 'Tipos de pago',
  REFUSE_FIT: 'Rechazar cupo',
  SELECT_OPTIONAL_COSTS: 'Selecciona si quieres adicionar los rubros opcionales disponibles para ',
  TERMS_OF_CONTRACT: 'Declaro haber leído los términos del contrato y acepto sus condiciones.',
  TOTAL: 'Total',
  WEIGHT: 'Peso'
};

export default costsAndContracts;
