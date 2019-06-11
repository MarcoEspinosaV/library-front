export interface IDevelopmentHistoryBathroomLanguage {
  PEED_WORD: string;
  DEPOSITION_WORD: string;
  DEPOSITION_TIME: string;
  NEXT: string;
  HOUR_PH: string;
}

const developmentHistoryBathroom: IDevelopmentHistoryBathroomLanguage = {
  PEED_WORD: 'Palabra que usa para orinar',
  DEPOSITION_WORD: 'Palabra que usa para deposicion',
  DEPOSITION_TIME: 'Hora para deposición?',
  NEXT: 'Siguiente',
  HOUR_PH: 'hh-mm-am/pm'
};

export default developmentHistoryBathroom;
