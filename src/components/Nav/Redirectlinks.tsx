import styled from 'styled-components'
import { breakingPoints } from '../../breakingPoints'

export function Redirectlinks() {
  return (
    <Wrapper>
      <a href="https://github.com/samuel-alves21" target='_blank'>
        <img src='img/github.svg' alt="giyhub icon" />
      </a>
      <a href="https://www.linkedin.com/in/samuel-theodoro/" target='_blank'>
        <img src='img/linkedin.svg' alt="linkedIn icon" />
      </a>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-2);

  & a:hover {
    opacity: 0.5;
    transition: opacity 0.2s;
  }

  & img {
    width: 35px;
  }

  @media (max-width: ${breakingPoints.sm}) {
      & img {
      width: 30px;
    }
  }
`