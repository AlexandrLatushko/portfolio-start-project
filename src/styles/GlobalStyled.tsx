import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyled = createGlobalStyle`

    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
    scroll-behavior: smooth;
    }

    body {
        margin: 0;
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.colors.font};
        line-height: 1.2;
        min-width: 360px;
    }

    a {
        text-decoration:none ;
        color: ${theme.colors.font};
        cursor: pointer;
    }

    h3 {
        font-family: "Josefin Sans", sans-serif;
        font-weight: 700;
        font-size: 16px;
        letter-spacing: 0.06em;
    }

    p {
        font-weight: 400;
        font-size: 14px;
        line-height: 1.4;
    }

    ul {
        list-style: none;
    }

    button {
        background-color: unset;
        border: none;
        cursor: pointer;
        color: ${theme.colors.font};
    }

    section {
        padding: 100px 0;

        @media ${theme.media.mobile} {
            padding: 80px 0;
        }
    }

    section:nth-of-type(odd) { //для каждой четной секции применятся стили 
        background-color: ${theme.colors.primaryBg}
    }

    section:nth-of-type(even) { //для каждой четной секции применятся стили 
        background-color: ${theme.colors.secondaryBg}
    }
`
