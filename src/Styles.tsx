import { createGlobalStyle } from 'styled-components' 

import { breakingPoints } from './breakingPoints'

export const GlobalStyles = createGlobalStyle`

  :root {
    --primary-color: #A501E6;
    --secundary-color: #003BE6;
    --tertiary-color: #666;
    --tertiary-color-lighter: #b3b3b3;
    --quaternary-color: #42446E;

    --nav-color: #f0f0f0;

    --gap-1 : 10px;
    --gap-2 : 20px;
    --gap-3 : 30px;
    --gap-4 : 40px;
    --gap-5 : 50px;
    --gap-6 : 60px;
    --gap-7 : 70px;
    --gap-8 : 80px;
    --gap-9 : 90px;
    --gap-10 : 100px;
    --gap-15 : 150px;
    --gap-20 : 200px;
    --gap-25 : 250px;

    position: relative;
    scroll-behavior: smooth;
    
    ::selection {
      background-color: var(--tertiary-color-lighter);
      color: #fff;
    }
  }

  .section-margin {
    margin-top: var(--gap-10);
  }

  .subtitle-margin {
    margin-top: var(--gap-1);
  }

  .nav-scroll {
    background-color: var(--tertiary-color-light);
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
    font-size: 1.1rem;
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
      margin-top: var(--gap-5);
    }
  }

  @media (max-width: ${breakingPoints.sm}) {
    .subtitle-margin {
      margin-top: var(--gap-1);
    }

    h1 {
      font-size: 2rem;
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
      font-size: 0.8rem;
    }

    a {
      font-size: 0.7rem;
    }
  }
`