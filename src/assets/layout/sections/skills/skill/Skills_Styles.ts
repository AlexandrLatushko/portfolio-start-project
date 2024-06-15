import styled from "styled-components";
import { theme } from '../../../../../styles/Theme';


const SectionsSkills = styled.section`
    position: relative;
`

const Skill = styled.div`
    width: 330px;
    flex-grow: 1;//тут говорим что каждый будет занимать челое свободное пространство (1 )
    text-align: center;
    padding: 62px 20px 40px;
`

const SkillTitle = styled.h3`
    margin: 70px 0 15px;
    text-transform: uppercase;
`

const SKillText = styled.p`
    
`

export const IconWrapper = styled.div`
    position: relative;

    color: ${theme.colors.accent};

    &::before {
        content: "";
        display: inline-block;
        width: 80px;
        height: 80px;
        background: rgba(255, 255, 255, 0.1);
        transform: rotate(-45deg) translate(-50%, -50%);

        position: absolute;
        top: 50%;
        left: 50% ;
        transform-origin: left top;
    }
`

export const S = {
    SectionsSkills,
    Skill,
    SkillTitle,
    SKillText, 
    
}