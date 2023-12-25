import styled from "styled-components"

import { breakingPoints } from "../../../utils/breakingPoints"

export type MainInfoProps = {
  title: string
  description: string
}

export function MainInfo({ description, title } :MainInfoProps) {
  return (
    <Wrapper>
      <h4>{title}</h4>
      <div>
        <span>{description}</span>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: var(--gap-1);
  align-items: center;

  @media (max-width: ${breakingPoints.sm}) {
    h4 {
      font-size: 0.9rem;
    }
  }

  & > div {
    background-color: #D7FFE0;
    display: flex;
    justify-content: center;
    align-items: center;  
    padding: 0 var(--gap-3);
    border-radius: 20px;

    @media (max-width: ${breakingPoints.sm}) {
      padding: 0 var(--gap-2);
    }
  }

  & span {
    color: #018C0F;
    font-weight: 600;

    @media (max-width: ${breakingPoints.sm}) {
      font-size: 0.6rem;
    }
  }
`
