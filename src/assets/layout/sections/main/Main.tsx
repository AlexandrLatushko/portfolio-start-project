import React from 'react';
import styled from 'styled-components';
import photo from '../../../images/photo.jpeg'
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Container } from '../../../../components/Container';
import { theme } from '../../../../styles/Theme';
import { font } from '../../../../styles/Common';

export const Main = () => {
    return ( 
        <StyledMain>
            <Container>
                <FlexWrapper align='center'justify='space-around' wrap='wrap'>
                
                    <TextBlok>
                        <SmallText>Hi There</SmallText>
                        <Name>I am <span>Svetlana Dyablo</span></Name>
                        <MainTitle>A Web Developer. </MainTitle>
                    </TextBlok>

                    <PhotoWrapper>
                        <Photo src={photo} alt='my Photo'/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    display: flex;

`

const TextBlok = styled.div`
    text-align: start;
`

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;
    margin-top: 65px;

    &::before {
        content: " ";
        width: 360px;
        height: 470px;
        border: 5px solid ${theme.colors.accent};
        
        position: absolute;
        top:-24px;
        left: 24px;
        z-index: -1;

        @media ${theme.media.mobile} {
            width:314px;
            height: 414px;
            top:-10px;
            left: 15px;

        }

    }
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
    margin-right: 20px;

    @media ${theme.media.mobile} {
        width: 310px;
        height: 380px;
    }
`
const MainTitle = styled.h1`
    ${font({weight: 400,
            Fmax:27,
            Fmin:20
        },          
    )}
    /* font-weight: 400;
    font-size: 27px; */
`
const Name = styled.h2`
//тут мы используем мексин для резинового шрифта (задаем шрифт и макс и мин размер для разных девайсов )
    ${font({famili: "'Josefin Sans', sans-serif;",
            weight: 700,
            Fmax:50,
            Fmin:36
        },          
    )}
    /* font-family:'Josefin Sans', sans-serif; 
    font-weight: 700;
    font-size: 50px; */

    letter-spacing: 0.05em;
    margin: 10px 0;

    span {
        position: relative;
        z-index: 0;
        white-space: nowrap;//не переносить текст на след строку

        &::before {
            content: " ";
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: ${theme.colors.accent};
            position: absolute;
            bottom: 0;
            z-index: -1;
        }
    }

    @media ${theme.media.mobile} {
        margin: 15px 0 22px;
    }
`

const SmallText = styled.span`
    ${font({weight: 400,
            Fmax:14,
            Fmin:13
        },          
    )}

    /* font-weight: 400;
    font-size: 14px; */
`

