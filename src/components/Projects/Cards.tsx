import styled from "styled-components"

import { ProjectCard } from "./ProjectCard"

export function Cards() {
  return (
    <Wrapper>
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
  
` 