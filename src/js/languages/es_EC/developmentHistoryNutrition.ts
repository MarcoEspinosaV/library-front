export interface IDevelopmentHistoryNutritionLanguage {
  MATERNAL_NUTRITION: string;
  MATERNAL_NUTRITION_AGE: string;
  FEEDING_BOTTLE: string;
  FEEDING_BOTTLE_AGE: string;
  FAVORITE_FOODS: string;
  VEGETARIAN_FAMILY: string;
  EATING_RESTRICTIONS: string;
  BREAKFAST_HOUR: string;
  LUNCH_HOUR: string;
  DINNER_HOUR: string;
  NEXT: string;
  HOUR_PH: string;
  DATE_PH: string;
}

const developmentHistoryNutrition: IDevelopmentHistoryNutritionLanguage = {
  MATERNAL_NUTRITION: 'Alimentacion Materna?',
  MATERNAL_NUTRITION_AGE: 'Cuanto tiempo?',
  FEEDING_BOTTLE: 'Tomo biberón?',
  FEEDING_BOTTLE_AGE: 'Hasta que edad?',
  FAVORITE_FOODS: 'Alimentos preferidos?',
  VEGETARIAN_FAMILY: 'Familia vegetariana? / Habitos alimentarios de la familia?',
  EATING_RESTRICTIONS: 'Otras restricciones dieteticas?',
  BREAKFAST_HOUR: 'Hora Desayuno?',
  LUNCH_HOUR: 'Hora Almuerzo?',
  DINNER_HOUR: 'Hora Cena?',
  NEXT: 'Siguiente',
  HOUR_PH: 'hh-mm-am/pm',
  DATE_PH: 'aaaa-mm'
};

export default developmentHistoryNutrition;
