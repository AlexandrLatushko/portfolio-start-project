import React from 'react';
import styled from 'styled-components';
import { SectionsTitle } from '../../../../components/SectionsTitle';
import { Button } from '../../../../components/Button';
import { Container } from '../../../../components/Container';
import { FlexWrapper } from '../../../../components/FlexWrapper';

export const Slogan = () => {
    return (
        <StyledSlogan>
            <Container>
                <FlexWrapper direction='column' align='center'>
                    <SectionsTitle>I Am Available For Freelance</SectionsTitle>
                    <Button>Hire me </Button>
                </FlexWrapper>
                
            </Container>
            
            
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`

`