import { useContext } from "react";

import { languages } from "../../utils/languages";

import { SettingsContext, SettingsContextType } from "../../contexts/SettingsContext";

import { AboutMeCard } from "./AboutMeCard";

export function Education() {

  const { settingsState: { language } } = useContext(SettingsContext) as SettingsContextType
  
  const { title, card01 } = languages[language].about.education

  return (
    <>
      <h1>{title}</h1>
      <AboutMeCard 
      title={card01.title}
      description={card01.description}
      company={card01.company}
      initialMounth={card01.initialMounth}
      finalMounth={card01.finalMounth}
      initialYear={2022}
      finalYear={2023}
      />
    </>
  )
}