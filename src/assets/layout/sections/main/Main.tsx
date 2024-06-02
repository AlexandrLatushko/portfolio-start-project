import React from 'react';
import styled from 'styled-components';
import photo from '../../../images/photo.jpeg'
import { FlexWrapper } from '../../../../components/FlexWrapper';

export const Main = () => {
    return ( 
        <StyledMain>
            
            <FlexWrapper align='center'justify='space-around' >
                
                <div>
                    <span>Hi There</span>
                    <Name>I am Svetlana Dyablo</Name>
                    <MainTitle>A Web Developer. </MainTitle>
                </div>
                
                <Photo src={photo} alt='my Photo'/>
            </FlexWrapper>
            
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    background-color: #e5f85749;
`

const Photo = styled.img`
    width: 384px;
    height: 470px;
    object-fit: cover;
`
const MainTitle = styled.h1`
    
`
const Name = styled.h2`
    
`