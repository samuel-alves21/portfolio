import { useContext } from "react";

import { SettingsContext, SettingsContextType } from "../../contexts/SettingsContext";

import { languages } from "../../utils/languages";
import { AboutMeCard } from "./AboutMeCard";

export function Language() {

  const { settingsState: { language } } = useContext(SettingsContext) as SettingsContextType
  
  const { title, card01, card02 } = languages[language].about.languages

  return (
    <>
      <h1>{title}</h1>
      <AboutMeCard
      title={card01.title}
      description={card01.description}
      />
      <AboutMeCard
      title={card02.title}
      description={card02.description}
      />
    </>
  )
}