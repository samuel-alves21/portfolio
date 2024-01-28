import styled from "styled-components"

import { AboutText } from "./AboutText"
import { AboutImg } from "./AboutImg"

import { breakingPoints } from "../../utils/breakingPoints"

export function Home() {
  return (
    <Wrapper id='home' className="section-margin">
      <AboutText /> 
      <AboutImg />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  min-height: 70vh;
  justify-content: space-between;
  align-items: center;

  margin-top: var(--gap-15);

  @media (max-width: ${breakingPoints.lg}) {
    flex-direction: column-reverse;
    justify-content: space-evenly;
    text-align: center;
    gap: var(--gap-3);
  }

  @media (max-width: ${breakingPoints.md}) {
    margin-top: var(--gap-10);
  }

  @media (max-width: ${breakingPoints.md}) {

    margin-top: var(--gap-10);
  }
`