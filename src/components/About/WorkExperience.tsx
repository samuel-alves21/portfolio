import { useContext } from "react";

import { languages } from "../../utils/languages";

import { SettingsContext, SettingsContextType } from "../../contexts/SettingsContext";

import { AboutMeCard } from "./AboutMeCard";


export function WorkExperience() {

  const { settingsState: { language } } = useContext(SettingsContext) as SettingsContextType
  
  const { title, card01} = languages[language].about.work

  return (
    <>
      <h1>{title}</h1>
      <AboutMeCard 
      title={card01.title}
      description={card01.description}
      company={card01.company}
      location={card01.location}
      initialMounth={card01.initialMounth}
      initialYear={2022}
      />
    </>
  )
}