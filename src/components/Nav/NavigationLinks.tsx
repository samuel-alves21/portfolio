import styled from "styled-components"
import { useContext } from "react"

import { breakingPoints } from "../../utils/breakingPoints"

import { links } from "../../utils/links"
import { Link } from "../Link"

import { SettingsContext, SettingsContextType } from "../../contexts/SettingsContext"

export function Navigationlinks() {

  const { settingsState: { language } } = useContext(SettingsContext) as SettingsContextType

  return (
    <Wrapper>
      {links[language].map((linkObj, index) => (
        <Link key={index} destinationId={linkObj.id} text={linkObj.name} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-5);
  color: var(--tertiary-color);

  @media (max-width: ${breakingPoints.xxl}) {
    gap: var(--gap-3);
  }
`

