import styled from "styled-components"

import { AboutText } from "./AboutText"
import { AboutImg } from "./AboutImg"
import { breakingPoints } from "../../breakingPoints"

export function About() {
  return (
    <Wrapper>
      <AboutText /> 
      <AboutImg />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${breakingPoints.lg}) {
    flex-direction: column-reverse;
    justify-content: space-evenly;
    text-align: center;
    gap: var(--gap-3);
  }
`