import styled from "styled-components"
import { useContext } from "react"

import { breakingPoints } from "../../utils/breakingPoints"

import { SettingsContext, SettingsContextType } from "../../contexts/SettingsContext"

export function Icons() {
  const { settingsState: { darkTheme } } = useContext(SettingsContext) as SettingsContextType 
  const expressIcon = darkTheme ? 'img/express-js-white-icon.png' : 'img/express.svg'

  return (
    <Wrapper className="section-margin">
      <img src='img/typescript-icon.svg' alt="typeScript icon" title='TypeScript'/>
      <img src='img/html.svg' alt="html icon" title='Html'/> 
      <img src='img/css.svg' alt="css icon" title='Css'/>
      <img src='img/react.svg' alt="react icon" title='React'/>
      <img src='img/styledComponents.svg' alt="styledComponents icon" title='Styled Components'/> 
      <img src='img/redux.svg' alt="redux icon" title='Redux'/>
      <img src='img/node.svg' alt="node icon" title='Node'/>
      <img src={expressIcon} alt="express icon" title='Express'/> 
      <img src='img/jest.svg' alt="jest icon" title='Jest'/> 
      <img src='img/firebase-icon.svg' alt="firebase icon" title='Firebase'/>
      <img src='img/mongoDb-icon.svg' alt="mongoDB icon" title='mongoDB'/>
      <img src='img/postgre-icon.svg' alt="postgreSQL icon" title='postgreSQL'/>
    </Wrapper>
  )
} 

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: var(--gap-10);

  & img {
      width: 80px;
      margin: 0 auto;
    }

  @media (max-width: ${breakingPoints.lg}) {
    gap: var(--gap-7);
    width: initial;
  }

  @media (max-width: ${breakingPoints.xl}) {
    grid-template-columns: repeat(4, 3fr);
  } 

  @media (max-width: ${breakingPoints.md}) {
    gap: var(--gap-5);
    
    & img {
      width: 75px;
    }
  }

  @media (max-width: ${breakingPoints.sm}) {
    grid-template-columns: repeat(3, 4fr);
    gap: var(--gap-4);

    & img {
      width: 60px;
    }
  }
`