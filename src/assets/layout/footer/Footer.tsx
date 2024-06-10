import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../components/icon/Icon';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper direction='column' align='center'>
                    <Title>Svetlana</Title>
                    <SocialList>
                        <SocialItem>
                            <SocialIconLink>
                                <Icon width='20px' height='20px' viewBox='0 0 20 20' iconId={"instagram"}  />
                            </SocialIconLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialIconLink>
                                <Icon width='20px' height='20px' viewBox='0 0 20 20' iconId={"trlrgram"}  />
                            </SocialIconLink>
                        </SocialItem>
                        <SocialItem>    
                            <SocialIconLink>
                                <Icon width='20px' height='20px' viewBox='0 0 20 20' iconId={"vk"}  />
                            </SocialIconLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialIconLink>
                                <Icon width='20px' height='20px' viewBox='0 0 20 20' iconId={"linkedin"}  />
                            </SocialIconLink>
                        </SocialItem>
                    </SocialList>
                    <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
                </FlexWrapper>
            </Container>
                
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${theme.colors.primaryBg};
    min-height: 30vh;
    padding: 52px 0 27px;
`
const Title = styled.h3`
    font-family: "Josefin Sans", sans-serif;
    font-weight: 700;
    font-size: 22px;
    letter-spacing: 0.14em;
`

const SocialList = styled.ul`
    display: flex;
    gap: 20px ;

`

const SocialItem = styled.li`
    margin: 30px 0 27px;
`


const SocialIconLink = styled.a`
    border-radius: 50%;
    width: 35px;
    height: 35px;
    background-color: rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${theme.colors.accent};

    &:hover {
        color: ${theme.colors.primaryBg};
        transform: translateY(-5px);
    }
`

const Copyright = styled.small`
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    color: rgba(255, 255, 255, 0.5);
`