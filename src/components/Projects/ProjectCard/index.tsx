import styled from "styled-components"

import { HeaderImage, HeaderImageProps } from "./HeaderImage"
import { Title, TitleProps } from "./Title"
import { Description, DescriptionProps } from "./Description"
import { Stack, TechStackProps } from "./Stack"
import { ProjectsLinks, ProjectsLinksProps } from "./ProjectsLinks"
import { breakingPoints } from "../../../breakingPoints"

type ProjectCardProps = HeaderImageProps & TitleProps & DescriptionProps & TechStackProps & ProjectsLinksProps

export function ProjectCard({ img, title, description, techStack, projectCodeLink, liveProjectLink }: ProjectCardProps) {
  return (
    <MainWrapper>
      <HeaderImage img={img}/>
      <InfoWrapper>
        <ContentWrapper>
          <Title title={title}/>
          <Description description={description}/> 
        </ContentWrapper>
        <ContentWrapper>
          <Stack techStack={techStack}/>
          <ProjectsLinks projectCodeLink={projectCodeLink} liveProjectLink={liveProjectLink}/>
        </ContentWrapper>
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

  & img {
    border-radius: 15px 15px 0 0;
  }

  @media (max-width: ${breakingPoints.md}) {
      & p, & a {
        font-size: 0.8rem;
    }
  }

  @media (max-width: ${breakingPoints.sm}) {
    width: 100%;
  }
`

const InfoWrapper = styled.div`
  display: flex; 
  height: 100%;
  gap: 15px;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;

  @media (max-width: ${breakingPoints.sm}) {
    padding: 10px;
    gap: var(--gap-1);
  }
`

const ContentWrapper = styled.div`
  display: flex; 
  flex-direction: column;
  gap: 15px;
` 