import React from 'react';
import styled from 'styled-components';
import { SectionsTitle } from '../../../../components/SectionsTitle';
import { Menu } from '../../../../components/menu/Menu';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import socialImg from '../../../../assets/images/proj1.webp'
import timerImg from '../../../../assets/images/proj2.webp'
import { Work } from './work/Work';


const worksitems = ["All", "landing page", "React", "spa"]


export const Works = () => {
    return (
        <StyledWorks>
            <SectionsTitle>My Works</SectionsTitle>
            <Menu menuItems={worksitems}/>
            <FlexWrapper justify={"space-around"}>
                <Work title={"Social Network"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
                src={socialImg} />
                <Work title={"Social Network"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
                src={timerImg} />
            </FlexWrapper>
            
        </StyledWorks>
    );
};

const StyledWorks = styled.section` 
    min-height: 100vh;
    background-color: #7bf6fa6f;
`