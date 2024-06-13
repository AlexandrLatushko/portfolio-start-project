import styled from "styled-components"
import { theme } from "../styles/Theme"
import { font } from "../styles/Common"

export const SectionsTitle = styled.h2`
    text-align: center;

    ${font({
        famili:"'Josefin Sans', sans-serif",
                weight:600,
                Fmax:36,
                Fmin:30,
    })}
    /* font-family: "Josefin Sans", sans-serif; */
    /* font-weight: 600; */
    letter-spacing: 0.14em;
    /* font-size: 36px; */
    margin-bottom: 90px;

    position: relative;

    &::before {
        content: " ";
        display: inline-block;
        width: 55px;
        height: 1px;
        background-color: ${theme.colors.accent};

        position: absolute;
        left: 50%;
        bottom: -30px;
        transform: translateX(-50%);

        @media ${theme.media.mobile} {
            bottom: -24px;
        }
    }
`