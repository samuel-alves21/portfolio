import styled from "styled-components"

import { HeaderImage, HeaderImageProps } from "./HeaderImage"
import { Title, TitleProps } from "./Title"
import { Description, DescriptionProps } from "./Description"
import { Stack, TechStackProps } from "./Stack"
import { ProjectsLinks, ProjectsLinksProps } from "./ProjectsLinks"

type ProjectCardProps = HeaderImageProps & TitleProps & DescriptionProps & TechStackProps & ProjectsLinksProps

export function ProjectCard({ img, title, description, techStack, projectCodeLink, liveProjectLink }: ProjectCardProps) {
  return (
    <MainWrapper>
      <HeaderImage img={img}/>
      <InfoWrapper>
        <Title title={title}/>
        <Description description={description}/> 
        <Stack techStack={techStack}/>
        <ProjectsLinks projectCodeLink={projectCodeLink} liveProjectLink={liveProjectLink}/>
      </InfoWrapper>
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
  background-color: #fff;
  box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.20);
  display: flex; 
  flex-direction: column;
  border-radius: 15px;
  object-fit: cover;
  width: 350px;

  & img {
    border-radius: 15px 15px 0 0;
  }
`

const InfoWrapper = styled.div`
  display: flex; 
  gap: 15px;
  flex-direction: column;
  padding: 15px;
  width: 100%;
  z-index: 2;
`