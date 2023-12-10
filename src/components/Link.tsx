import styled from "styled-components"

type LinkProps = {
  destinationId: string
  text: string
  className?: string
}

export function Link({ destinationId, text, className }: LinkProps) {

  const handleClick = () => {
    const destination = document.getElementById(destinationId) as HTMLElement
    window.scrollTo({
      top: destination?.offsetTop - 80,
      behavior: "smooth"
    })
  }

  return (
    <StyledLink className={className} onClick={handleClick}>{text}</StyledLink>
  )
} 

const StyledLink = styled.span`
  font-size: 20px;
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