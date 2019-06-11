export interface IDevelopmentHistorySleepingLanguage {
  SLEEP_ROUTINE: string;
  WAKES_UP: string;
  NAP: string;
  SLEEPS: string;
  SLEEPS_WELL_HAS_NIGHTMARES: string;
  NEXT: string;
  HOUR_PH: string;
}

const developmentHistorySleeping: IDevelopmentHistorySleepingLanguage = {
  SLEEP_ROUTINE: 'Cual es la rutina del niño para dormir?',
  WAKES_UP: 'Se despierta?',
  NAP: 'Siesta?',
  SLEEPS: 'Se duerme?',
  SLEEPS_WELL_HAS_NIGHTMARES: 'Duerme bien? Tiene pesadillas?',
  NEXT: 'Siguiente',
  HOUR_PH: 'hh-mm-am/pm'
};

export default developmentHistorySleeping;
