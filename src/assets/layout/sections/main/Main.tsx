import React from 'react';
import photo from '../../../images/photo.jpeg'
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Container } from '../../../../components/Container';
import { S } from './Main_Styles';

export const Main: React.FC = () => {
    return ( 
        <S.Main>
            <Container>
                <FlexWrapper align='center'justify='space-around' wrap='wrap'>
                
                    <S.TextBlok>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Svetlana Dyablo</span></S.Name>
                        <S.MainTitle>A Web Developer. </S.MainTitle>
                    </S.TextBlok>

                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt='my Photo'/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};

