import styled from 'styled-components'
import { ImageWrapper } from '../ImageWrapper'
const githubImg = 'img/github.svg'
const linkedInImg = 'img/linkedin.svg'

export function Redirectlinks() {
  const size = '40px'

  return (
    <Wrapper>
      <a href="https://github.com/samuel-alves21" target='_blank'><ImageWrapper size={size} src={githubImg} alt="github icon" /></a>
      <a href="https://www.linkedin.com/in/samuel-theodoro/" target='_blank'><ImageWrapper size={size} src={linkedInImg} alt="linkedIn icon" /></a>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  gap: 20px;

  & a:hover {
    opacity: 0.5;
    transition: opacity 0.2s;
  }
`