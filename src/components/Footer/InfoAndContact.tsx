import styled from "styled-components";

import { breakingPoints } from "../../utils/breakingPoints";

export function InfoAndContact() {
  return (
    <Wrapper>
      <p>+55 (31)97112-2156</p>
      <p>samueltheodoro21@gmail.com</p>
      <p>Designed by <a href="https://www.figma.com/@pavanmg007" target="_blank">Pavan MG</a> and developed by <a href="https://github.com/samuel-alves21" target="_blank">samuel alves</a></p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  gap: var(--gap-2);

  & a, & a:visited {
    color: var(--primary-color);
  }

  & a:hover {
    opacity: 0.8;
  }

  @media (max-width: ${breakingPoints.xl}) {
    justify-content: space-between;
    gap: var(--gap-1);
  }

  @media (max-width: ${breakingPoints.lg}) {
    flex-direction: column;
    gap: var(--gap-1);
  }
` 