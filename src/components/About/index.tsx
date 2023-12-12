import styled from "styled-components"
import { AboutMe } from "./AboutMe"
import { WorkExperience } from "./WorkExperience"
import { Education } from "./Education"
import { breakingPoints } from "../../utils/breakingPoints"


export function About() {
  return (
    <Wrapper id="about">
      <AboutMe />
      <WorkExperience />
      <Education />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: var(--gap-3);

  @media (max-width: ${breakingPoints.lg}) {
    justify-content: center;
    text-align: center;
    width: 80%;
  }

  @media (max-width: ${breakingPoints.md}) {
    width: 90%;
  }

  @media (max-width: ${breakingPoints.sm}) {
    width: 100%;
  }
`