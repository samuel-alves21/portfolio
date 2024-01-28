import styled from "styled-components"

import { breakingPoints } from "../../utils/breakingPoints"

import { WorkExperience } from "./WorkExperience"
import { Education } from "./Education"
import { Language } from "./Language"
import { AboutMe } from "./AboutMe"


export function About() {
  return (
    <Wrapper id="about" data-aos="fade-up" data-aos-duration="1500">
      <AboutMe />
      <WorkExperience />
      <Education />
      <Language />
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