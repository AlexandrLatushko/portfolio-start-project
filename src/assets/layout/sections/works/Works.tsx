import React from 'react';
import styled from 'styled-components';
import { SectionsTitle } from '../../../../components/SectionsTitle';
import { Menu } from '../../../../components/menu/Menu';

const worksitems = ["All", "landing page", "React", "spa"]


export const Works = () => {
    return (
        <StyledWorks>
            <SectionsTitle>My Works</SectionsTitle>
            <Menu menuItems={worksitems}/>
            
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: #7bf6fa6f;
`