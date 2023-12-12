import styled from "styled-components"
import { breakingPoints } from "../../../utils/breakingPoints"

export function SubInfo() {
  return (
    <Wrapper>
      <Location>
        <div>
          <img src="img/office-building-icon.svg" alt="small building icon" />
          <p>freelancer</p>
        </div>
        <div>
          <img src="img/location-icon.svg" alt="small location icon" />
          <p>internet</p>
        </div>
      </Location>
      <Date>
        <img src="img/calendar-icon.svg" alt="small calendar icon" />
        <p>Apr 2022 - Current</p>
      </Date>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & p {
    font-size: 0.9rem;

    @media (max-width: ${breakingPoints.sm}) {
      font-size: 0.7rem;
    }
  }
`

const Location = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap-1);
  width: 50%;

  & > div {
    display: flex;
    gap: 5px;
  }
`

const Date = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`