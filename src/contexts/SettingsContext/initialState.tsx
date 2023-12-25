export type Language = 'en' | 'pt';

export type SettingsState = {
  shouldDisplayNav: boolean;
  darkTheme: boolean;
  language: Language;
}

export const initialState: SettingsState = {
  shouldDisplayNav: false,
  darkTheme: false,
  language: "en",
}