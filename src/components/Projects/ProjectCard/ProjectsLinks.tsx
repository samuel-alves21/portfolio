import styled from "styled-components"
import { ImageWrapper } from "../../ImageWrapper"

export type ProjectsLinksProps = {
  liveProjectLink: string
  projectCodeLink: string
}

export function ProjectsLinks({ liveProjectLink, projectCodeLink } :ProjectsLinksProps) {
  return (
    <Wrapper>
      <LinkWrapper>
        <ImageWrapper src="img/link-chain.svg" alt="link chain icon" size="25px"/>
        <a href={liveProjectLink} target="_blank">Live Preview</a>
      </LinkWrapper>
      <LinkWrapper>
        <ImageWrapper src="img/project-github.svg" alt="github icon" size="25px"/>
          <a href={projectCodeLink} target="_blank">View Code</a>
      </LinkWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const LinkWrapper = styled.div`
  display: flex;
  gap: 10px;

  & a {
    text-decoration: underline;
    color: #000;
  }
`