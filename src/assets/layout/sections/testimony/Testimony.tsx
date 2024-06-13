import React from 'react';
import styled from 'styled-components';
import { SectionsTitle } from '../../../../components/SectionsTitle';
import { Icon } from '../../../../components/icon/Icon';
import { Slider } from '../../../../components/slider/Slider';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Container } from '../../../../components/Container';
import { IconWrapper } from '../skills/skill/Skills_Styles';

export const Testimony:React.FC = () => {
    return (
        <StyledTestimony>
            <Container>
                <SectionsTitle> Testimony </SectionsTitle>
                <FlexWrapper direction={"column"} align={'center'}>
                    
                    <IconWrapper>
                        <Icon iconId={"quote"}/>
                    </IconWrapper>
                    
                    <Slider/>
                </FlexWrapper>
                
            </Container>
            
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    
    ${IconWrapper} {
        margin: 40px 0 72px;
    }
`

