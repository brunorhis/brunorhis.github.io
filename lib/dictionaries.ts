import pt from '../dictionaries/pt.json';
import en from '../dictionaries/en.json';

const dictionaries = {
  pt,
  en,
};

export type Locale = keyof typeof dictionaries;

export const getDictionary = (locale: string) => {
  return dictionaries[locale as Locale] ?? dictionaries.pt;
};
