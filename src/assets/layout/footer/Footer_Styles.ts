import styled from "styled-components"
import { theme } from "../../../styles/Theme"
import { font } from "../../../styles/Common"

const Footer = styled.footer`
    background-color: ${theme.colors.primaryBg};
    min-height: 30vh;
    padding: 52px 0 27px;

    @media ${theme.media.mobile}{
        padding: 40px 0;
    }
`
const Title = styled.h3`
    ${font({  // применяем мексин 
        famili:"'Josefin Sans', sans-serif",
        weight:700,
        Fmax:22,
        Fmin:16,
    })}
    /* font-family: "Josefin Sans", sans-serif;
    font-weight: 700;
    font-size: 22px; */
    letter-spacing: 0.14em;


`

const SocialList = styled.ul`
    display: flex;
    gap: 20px ;

`

const SocialItem = styled.li`
    margin: 30px 0 27px;
`


const SocialIconLink = styled.a`
    border-radius: 50%;
    width: 35px;
    height: 35px;
    background-color: rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${theme.colors.accent};

    &:hover {
        color: ${theme.colors.primaryBg};
        transform: translateY(-5px);
    }
`

const Copyright = styled.small`
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    color: rgba(255, 255, 255, 0.5);
`

export const S = {
    Footer,
    Title,
    SocialList,
    SocialItem,
    SocialIconLink,
    Copyright

}