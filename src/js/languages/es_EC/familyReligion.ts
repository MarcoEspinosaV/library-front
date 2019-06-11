export interface IFamilyReligionLanguage {
  NEXT: string;
  PARENT_RELIGION: string;
  OPINION_RELIGION: string;
  ENTER_YOUR_RELIGION: string;
}

const familyReligion: IFamilyReligionLanguage = {
  ENTER_YOUR_RELIGION: 'Ingresa el nombre de tu religión',
  NEXT: 'Siguiente',
  OPINION_RELIGION: '¿Qué opinion tiene acerca de su religión?',
  PARENT_RELIGION: 'Religión'
};

export default familyReligion;
