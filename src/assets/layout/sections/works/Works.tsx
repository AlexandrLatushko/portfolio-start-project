import React from 'react';
import styled from 'styled-components';
import { SectionsTitle } from '../../../../components/SectionsTitle';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import socialImg from '../../../../assets/images/proj1.webp'
import timerImg from '../../../../assets/images/proj2.webp'
import { Work } from './work/Work';
import { Container } from '../../../../components/Container';
import { TabMenu } from './tabMenu/TabMenu';


const worksitems = ["All", "landing page", "React", "spa"]


export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionsTitle>My Works</SectionsTitle>
                <TabMenu menuItems={worksitems}/>
                <FlexWrapper justify={"space-between"}>
                    <Work title={"Social Network"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
                        src={socialImg} />
                    <Work title={"Social Network"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
                            src={timerImg} />
                </FlexWrapper>
            </Container>
            
            
        </StyledWorks>
    );
};

const StyledWorks = styled.section` 
`