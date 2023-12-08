import styled from 'styled-components'
const githubImg = 'img/github.svg'
const linkedInImg = 'img/linkedin.svg'

export function Redirectlinks() {
  return (
    <Wrapper>
      <a href="https://github.com/samuel-alves21" target='_blank'><img src={githubImg} alt="github icon" /></a>
      <a href="https://www.linkedin.com/in/samuel-theodoro/" target='_blank'><img src={linkedInImg} alt="linkedIn icon" /></a>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  gap: var(--gap-2);

  & a:hover {
    opacity: 0.5;
    transition: opacity 0.2s;
  }

  & img {
    width: 40px;
  }
`