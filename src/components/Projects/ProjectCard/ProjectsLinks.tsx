import styled from "styled-components"
import { useContext } from "react"

import { breakingPoints } from "../../../utils/breakingPoints"

import { SettingsContext, SettingsContextType } from "../../../contexts/SettingsContext"
import { languages } from "../../../utils/languages"

export type ProjectsLinksProps = {
  liveProjectLink: string
  projectCodeLink: string
}

export function ProjectsLinks({ liveProjectLink, projectCodeLink } :ProjectsLinksProps) {

  const { settingsState: { language } } = useContext(SettingsContext) as SettingsContextType

  const { cardCodeLink, cardLiveLink }= languages[language].projects

  return (
    <Wrapper>
      <LinkWrapper>
        <Img src="img/link-chain.svg" alt="link chain icon"/>
        <a href={liveProjectLink} target="_blank">{cardLiveLink}</a>
      </LinkWrapper>
      <LinkWrapper>
        <Img src="img/project-github.svg" alt="github icon"/>
          <a href={projectCodeLink} target="_blank">{cardCodeLink}</a>
      </LinkWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: var(--gap-1);
`

const Img = styled.img`
  width: 25px;

  @media (max-width: ${breakingPoints.sm}) {
    width: 16px;
  }
`

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-2);

  @media (max-width: ${breakingPoints.xl}) {
    gap: 5px;
  }

  & a {
    color: #000;
  }

  & a:hover {
    opacity: 0.8;
    text-decoration: underline;
    color: #757575;
  }
`