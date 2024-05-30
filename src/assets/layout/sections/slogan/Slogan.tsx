import React from 'react';
import styled from 'styled-components';
import { SectionsTitle } from '../../../../components/SectionsTitle';
import { Button } from '../../../../components/Button';

export const Slogan = () => {
    return (
        <StyledSlogan>
            <SectionsTitle>I Am Available For Freelance</SectionsTitle>
            <Button>Hire me </Button>
            
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
    min-height: 30%;
    background-color: #f2cbd573;
`