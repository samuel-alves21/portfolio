import styled from "styled-components"
import { ImageWrapper } from "../ImageWrapper"
import { breakingPoints } from "../../breakingPoints"
import { useMediaQuery } from "react-responsive"

export function Icons() {
  const md = useMediaQuery({ query: `(max-width: ${breakingPoints.md})`})
  const sm = useMediaQuery({ query: `(max-width: ${breakingPoints.sm})`})
  const size = sm ? "60px" : md ? "75px" : '100px'


  return (
    <Wrapper>
      <ImageWrapper src='img/js.svg' alt="javascript icon" size={size} title='JavaScript'/>
      <ImageWrapper src='img/html.svg' alt="html icon" size={size} title='Html'/> 
      <ImageWrapper src='img/css.svg' alt="css icon" size={size} title='Css'/>
      <ImageWrapper src='img/react.svg' alt="react icon" size={size} title='React'/>
      <ImageWrapper src='img/styledComponents.svg' alt="styledComponents icon" size={size} title='Styled Components'/> 
      <ImageWrapper src='img/redux.svg' alt="redux icon" size={size} title='Redux'/>
      <ImageWrapper src='img/node.svg' alt="node icon" size={size} title='Node'/>
      <ImageWrapper src='img/express.svg' alt="express icon" size={size} title='Express'/> 
      <ImageWrapper src='img/jest.svg' alt="jest icon" size={size} title='Jest'/> 
      <ImageWrapper src='img/git.svg' alt="git icon" size={size} title='Git'/>
      <ImageWrapper src='img/github.svg' alt="github icon" size={size} title='Github'/>
      <ImageWrapper src='img/vscode.svg' alt="vscode icon" size={size} title='Vscode'/>
    </Wrapper>
  )
} 

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 2fr);
  gap: 100px;
  margin-top: 100px;

  @media (max-width: ${breakingPoints.xl}) {
    grid-template-columns: repeat(4, 3fr);
  }

  @media (max-width: ${breakingPoints.md}) {
    gap: 50px;
    margin-top: 50px;
  }

  @media (max-width: ${breakingPoints.sm}) {
    grid-template-columns: repeat(3, 4fr);
    gap: 40px;
    margin-top: 40px;
  }
`