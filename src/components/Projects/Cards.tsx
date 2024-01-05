import styled from "styled-components"
import { useContext } from "react"

import { breakingPoints } from "../../utils/breakingPoints"
import { languages } from "../../utils/languages"

import { SettingsContext, SettingsContextType } from "../../contexts/SettingsContext"

import { ProjectCard } from "./ProjectCard"

export function Cards() {

  const { settingsState: { language } } = useContext(SettingsContext) as SettingsContextType

  const { card01, card02, card03 }= languages[language].projects

  return (
    <Wrapper className="section-margin">
      <ProjectCard 
      img="img/studyPom.png" 
      title={card01.title} 
      description={card01.description}
      techStack={card01.tech}
      liveProjectLink="https://pomodoro-app-cf8c3.web.app/StudyPom"
      projectCodeLink="https://github.com/samuel-alves21/StudyPom"
      />
      <ProjectCard 
      img="img/city-weather-checker.png" 
      title={card02.title} 
      description={card02.description}
      techStack={card02.tech}
      liveProjectLink="https://samuel-alves21.github.io/city-weather-checker/"
      projectCodeLink="https://github.com/samuel-alves21/city-weather-checker"
      />
      <ProjectCard 
      img="img/gym-landingpage.png" 
      title={card03.title} 
      description={card03.description}
      techStack={card03.tech}
      liveProjectLink="https://samuel-alves21.github.io/gym-landing-page/"
      projectCodeLink="https://github.com/samuel-alves21/gym-landing-page/tree/master"
      />
      {/* <ProjectCard 
      img="img/studyPom.png" 
      title={card04.title} 
      description={card04.description}
      techStack={card04.tech}
      liveProjectLink="https://pomodoro-app-cf8c3.web.app/StudyPom"
      projectCodeLink="https://github.com/samuel-alves21/StudyPom"
      />
      <ProjectCard 
      img="img/studyPom.png" 
      title={card05.title} 
      description={card05.description}
      techStack={card05.tech}
      liveProjectLink="https://pomodoro-app-cf8c3.web.app/StudyPom"
      projectCodeLink="https://github.com/samuel-alves21/StudyPom"
      />
      <ProjectCard 
      img="img/studyPom.png" 
      title={card06.title} 
      description={card06.description}
      techStack={card06.tech}
      liveProjectLink="https://pomodoro-app-cf8c3.web.app/StudyPom"
      projectCodeLink="https://github.com/samuel-alves21/StudyPom"
      /> */}
    </Wrapper>
    
  )
}

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns:  repeat(3, 1fr);
  gap: var(--gap-5);

  @media (max-width: ${breakingPoints.xxl}) {
    width: 100%;
  }

  @media (max-width: ${breakingPoints.xl}) {
    gap: var(--gap-1);
  }

  @media (max-width: ${breakingPoints.lg}) {
    /* width: min(650px, 100%); */
    grid-template-columns:  repeat(1, 1fr);
    gap: var(--gap-2);
    width: min(350px, 100%);
  }

  @media (max-width: ${breakingPoints.md}) {
    /* width: min(550px, 100%); */
  }

  @media (max-width: ${breakingPoints.sm}) {
    width: min(250px, 100%);
    grid-template-columns: repeat(1, 1fr);
    gap: var(--gap-2);
  }
` 