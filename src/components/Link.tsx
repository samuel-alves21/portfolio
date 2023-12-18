import styled from "styled-components"

type LinkProps = {
  destinationId: string
  text: string
  className?: string
}

export function Link({ destinationId, text, className }: LinkProps) {

  const handleClick = () => {
    const destination = document.getElementById(destinationId) as HTMLElement
    let offSetTop: number

    if (destinationId === 'home') {
      offSetTop = 0
    }  else {
      offSetTop = destination?.offsetTop - 80
    }

    window.scrollTo({
      top: offSetTop,
      behavior: "smooth"
    })
  }

  return (
    <StyledLink className={className} onClick={handleClick}>{text}</StyledLink>
  )
} 

const StyledLink = styled.span`
  position: relative;
  cursor: pointer;

  &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -2px;
      height: 2px;
      width: 100%;
      background-color: var(--tertiary-color);
      transition: opacity 0.4s;
      opacity: 0;
    }

  &:hover {
    &::after {
      opacity: 0.8;
    }
  }
`