import { createGlobalStyle } from 'styled-components' 

import { breakingPoints } from './breakingPoints'

export const GlobalStyles = createGlobalStyle`

  :root {
    --primary-color: #A501E6;
    --secundary-color: #003BE6;
    --tertiary-color: #666;
    --quaternary-color: #42446E;

    position: relative;
  }

  .section-margin {
    margin-top: 100px;

    @media (max-width: ${breakingPoints.md}) {
      margin-top: 50px;
    }

    @media (max-width: ${breakingPoints.sm}) {
      margin-top: 40px;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  a {
    text-decoration: none;
    color: var( --tertiary-color)
  }

  a:visited {
    color: var( --tertiary-color)
  }

  p {
    color: var( --tertiary-color)
  }

  h1 {
    font-size: 4rem;
    color: var(--secundary-color);
  }

  h3 {
    font-size: 2.2rem;
  }

  h4 {
    font-size: 1.8rem;
    color: var(--tertiary-color);
    font-weight: normal;
  }

  h5 {
    font-size: 1.4rem;
    color: var(--tertiary-color);
    font-weight: normal;
  }

  @media (max-width: ${breakingPoints.xxl}) {
    h1 {
      font-size: 3rem;
    }
  }

  @media (max-width: ${breakingPoints.sm}) {
    h1 {
      font-size: 2.2rem;
    }

    h3 {
      font-size: 1.3rem;
    }

    h4 {
      font-size: 1.2rem;
    }

    h5 {
      font-size: 1rem;
    }
  }
`