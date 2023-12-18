import styled from "styled-components"
import { useContext } from "react"

import { breakingPoints } from "../../../utils/breakingPoints"
import { languages } from "../../../utils/languages"

import { SettingsContext, SettingsContextType } from "../../../contexts/SettingsContext"

export type SubInfoProps = {
  location?: string
  company?: string
  initialMounth?: string 
  initialYear?: number
  finalMounth?: string 
  finalYear?: number
}

export function SubInfo({ company, location, initialMounth, initialYear, finalMounth, finalYear } :SubInfoProps) {

  const { settingsState: { language } } = useContext(SettingsContext) as SettingsContextType

  const { cardCurrent } = languages[language].about

  return (
    <Wrapper>
      <Location>
        <div>
          <img src="img/office-building-icon.svg" alt="small building icon" />
          <p>{company}</p>
        </div>
        {
          location && 
          <div>
            <img src="img/location-icon.svg" alt="small location icon" />
            <p>{location}</p>
          </div>
        }
      </Location>
      <Date>
        <img src="img/calendar-icon.svg" alt="small calendar icon" />
        <p>{initialMounth} {initialYear} - {finalMounth && finalYear ? `${finalMounth} ${finalYear}` : `${cardCurrent}`}</p>
      </Date>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & p {
    font-size: 0.9rem;

    @media (max-width: ${breakingPoints.sm}) {
      font-size: 0.7rem;
    }
  }
`

const Location = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap-1);
  width: 50%;

  & > div {
    display: flex;
    gap: 5px;
  }
`

const Date = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`