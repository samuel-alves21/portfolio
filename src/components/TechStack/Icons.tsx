import styled from "styled-components"
import { breakingPoints } from "../../breakingPoints"

export function Icons() {
  return (
    <Wrapper className="section-margin">
      <img src='img/js.svg' alt="javascript icon" title='JavaScript'/>
      <img src='img/html.svg' alt="html icon" title='Html'/> 
      <img src='img/css.svg' alt="css icon" title='Css'/>
      <img src='img/react.svg' alt="react icon" title='React'/>
      <img src='img/styledComponents.svg' alt="styledComponents icon" title='Styled Components'/> 
      <img src='img/redux.svg' alt="redux icon" title='Redux'/>
      <img src='img/node.svg' alt="node icon" title='Node'/>
      <img src='img/express.svg' alt="express icon" title='Express'/> 
      <img src='img/jest.svg' alt="jest icon" title='Jest'/> 
      <img src='img/git.svg' alt="git icon" title='Git'/>
      <img src='img/github.svg' alt="github icon" title='Github'/>
      <img src='img/vscode.svg' alt="vscode icon" title='Vscode'/>
    </Wrapper>
  )
} 

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: var(--gap-10);

  & img {
      width: 100px;
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