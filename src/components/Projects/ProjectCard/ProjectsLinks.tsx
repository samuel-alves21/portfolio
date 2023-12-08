import styled from "styled-components"

import { breakingPoints } from "../../../breakingPoints"

export type ProjectsLinksProps = {
  liveProjectLink: string
  projectCodeLink: string
}

export function ProjectsLinks({ liveProjectLink, projectCodeLink } :ProjectsLinksProps) {
  return (
    <Wrapper>
      <LinkWrapper>
        <Img src="img/link-chain.svg" alt="link chain icon"/>
        <a href={liveProjectLink} target="_blank">Live Preview</a>
      </LinkWrapper>
      <LinkWrapper>
        <Img src="img/project-github.svg" alt="github icon"/>
          <a href={projectCodeLink} target="_blank">View Code</a>
      </LinkWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const Img = styled.img`
  width: 25px;

  @media (max-width: ${breakingPoints.sm}) {
    width: 16px;
  }
`

const LinkWrapper = styled.div`
  display: flex;
  gap: var(--gap-2);

  @media (max-width: ${breakingPoints.md}) {
    gap: var(--gap-1);
  }

  & a {
    text-decoration: underline;
    color: #000;
  }
`