export const APP_LANGUAGES = {
  en_US: {
    id: 'en_US',
    label: 'English'
  },
  es_EC: {
    id: 'es_EC',
    label: 'Español'
  }
};

export const getLabels = (labelsFileName: string, language?: string) => {
  switch (language) {
    case APP_LANGUAGES.en_US.id:
      return require(`./en_US/${labelsFileName}`).default;
    default:
      return require(`./es_EC/${labelsFileName}`).default;
  }
};
