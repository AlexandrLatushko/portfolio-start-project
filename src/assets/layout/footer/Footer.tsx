import React from 'react';
import { Icon } from '../../../components/icon/Icon';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { S } from './Footer_Styles';

const socialItemData = [
    {
        iconId:"instagram",
    },
    {
        iconId:"trlrgram",
    },
    {
        iconId:"vk",
    },
    {
        iconId:"linkedin",
    },
]

export const Footer :React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <FlexWrapper direction='column' align='center'>
                    <S.Title>Svetlana</S.Title>
                    <S.SocialList>

                        {socialItemData.map((s, index)=> {
                            return (
                                <S.SocialItem key={index}>
                                    <S.SocialIconLink>
                                        <Icon width='20px' height='20px' viewBox='0 0 20 20' iconId={s.iconId}  />
                                    </S.SocialIconLink>
                                </S.SocialItem>
                            )
                        })}

                    </S.SocialList>
                    <S.Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</S.Copyright>
                </FlexWrapper>
            </Container>
                
        </S.Footer>
    );
};

