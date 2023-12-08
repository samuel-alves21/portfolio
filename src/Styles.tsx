import { createGlobalStyle } from 'styled-components' 

import { breakingPoints } from './breakingPoints'

export const GlobalStyles = createGlobalStyle`

  :root {
    --primary-color: #A501E6;
    --secundary-color: #003BE6;
    --tertiary-color: #666;
    --quaternary-color: #42446E;

    --gap-1 : 10px;
    --gap-2 : 20px;
    --gap-3 : 30px;
    --gap-4 : 40px;
    --gap-5 : 50px;
    --gap-10 : 100px;

    --margin-1 : 10px;
    --margin-2 : 20px;
    --margin-3 : 30px;
    --margin-4 : 40px;
    --margin-5 : 50px;
    --margin-10 : 100px;

    --padding-1 : 10px;
    --padding-2 : 20px;
    --padding-3 : 30px;
    --padding-4 : 40px;
    --padding-5 : 50px;
    --padding-10 : 100px;

    position: relative;
  }

  .section-margin {
    margin-top: 100px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  a {
    text-decoration: none;
    color: var( --tertiary-color);
  }

  a:visited {
    color: var( --tertiary-color);
  }

  p {
    color: var( --tertiary-color);
    font-size: 1rem;
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

  @media (max-width: ${breakingPoints.md}) {
      .section-margin {
        margin-top: 50px;
      }
    }

  @media (max-width: ${breakingPoints.sm}) {
    .section-margin {
      margin-top: 40px;
    }

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

    p {
      font-size: 0.7rem;
    }

    a {
      font-size: 0.7rem;
    }
  }
`