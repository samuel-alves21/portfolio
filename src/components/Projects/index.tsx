import styled from "styled-components"

import { Cards } from "./Cards"

export function Projects() {
  return (
    <Wrapper id='projects'>
      <h1>Projects</h1>
      <h4 className="subtitle-margin">Things I’ve built so far</h4>
      <Cards />
    </Wrapper>
  )
} 

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
`