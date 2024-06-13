import styled from "styled-components"
import { theme } from "../../styles/Theme"


const Slider = styled.div`
    max-width: 500px ;
`
const Slide = styled.div`
    text-align: center ;
`

const Text = styled.p`
    
`

const Name = styled.span`
    font-family: "Josefin Sans", sans-serif;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    margin: 22px 0 42px;
    display: inline-block;

`

const Pagination = styled.span`
    span{
        display: inline-block;
        border-radius: 20px;
        width: 7px;
        height: 7px;

        background: rgba(255, 255, 255, 0.5);
        
        & + span {
            margin-left: 5px;
        }

        &.active {
            border-radius: 20px;
            width: 20px;
            height: 7px;
            background-color: ${theme.colors.accent};
        }
    }

`

export const S = {
    Slider,
    Slide,
    Text,
    Name,
    Pagination,
}