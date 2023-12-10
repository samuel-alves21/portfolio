import styled from "styled-components"

import { ProjectCard } from "./ProjectCard"
import { breakingPoints } from "../../breakingPoints"

export function Cards() {
  return (
    <Wrapper className="section-margin">
      <ProjectCard 
      img="img/studyPom.png" 
      title="StudyPom" 
      description="StudyPom is a web-based pomodoro timer app built with TypeScript and React that helps you stay focused and productive during your study sessions."
      techStack="Html, Css, Javascript"
      liveProjectLink="https://pomodoro-app-cf8c3.web.app/StudyPom"
      projectCodeLink="https://github.com/samuel-alves21/StudyPom"
      />
      <ProjectCard 
      img="img/studyPom.png" 
      title="StudyPom" 
      description="StudyPom is a web-based pomodoro timer app built with TypeScript and React that helps you stay focused and productive during your study sessions."
      techStack="Html, Css, Javascript"
      liveProjectLink="https://pomodoro-app-cf8c3.web.app/StudyPom"
      projectCodeLink="https://github.com/samuel-alves21/StudyPom"
      />
      <ProjectCard 
      img="img/studyPom.png" 
      title="StudyPom" 
      description="StudyPom is a web-based pomodoro timer app built with TypeScript and React that helps you stay focused and productive during your study sessions."
      techStack="Html, Css, Javascript"
      liveProjectLink="https://pomodoro-app-cf8c3.web.app/StudyPom"
      projectCodeLink="https://github.com/samuel-alves21/StudyPom"
      />
      <ProjectCard 
      img="img/studyPom.png" 
      title="StudyPom" 
      description="StudyPom is a web-based pomodoro timer app built with TypeScript and React that helps you stay focused and productive during your study sessions."
      techStack="Html, Css, Javascript"
      liveProjectLink="https://pomodoro-app-cf8c3.web.app/StudyPom"
      projectCodeLink="https://github.com/samuel-alves21/StudyPom"
      />
      <ProjectCard 
      img="img/studyPom.png" 
      title="StudyPom" 
      description="A basic weather app made with React-Router and Open Weather Api for learning purpose and for fun."
      techStack="Html, Css, Javascript"
      liveProjectLink="https://pomodoro-app-cf8c3.web.app/StudyPom"
      projectCodeLink="https://github.com/samuel-alves21/StudyPom"
      />
      <ProjectCard 
      img="img/studyPom.png" 
      title="StudyPom" 
      description="StudyPom is a web-based pomodoro timer app built with TypeScript and React that helps you stay focused and productive during your study sessions."
      techStack="Html, Css, Javascript"
      liveProjectLink="https://pomodoro-app-cf8c3.web.app/StudyPom"
      projectCodeLink="https://github.com/samuel-alves21/StudyPom"
      />
    </Wrapper>
    
  )
}

const Wrapper = styled.div`
  /* width: min(1100px, 100%); */
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns:  repeat(3, 1fr);
  gap: var(--gap-5);

  @media (max-width: ${breakingPoints.xl}) {
    gap: var(--gap-1);
  }

  @media (max-width: ${breakingPoints.lg}) {
    width: min(650px, 100%);
    grid-template-columns:  repeat(2, 1fr);
    gap: var(--gap-2);
  }

  @media (max-width: ${breakingPoints.md}) {
    width: min(550px, 100%);
  }

  @media (max-width: ${breakingPoints.sm}) {
    width: min(250px, 100%);
    grid-template-columns: repeat(1, 1fr);
    gap: var(--gap-2);
  }
` 