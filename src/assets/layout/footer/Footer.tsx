import React from 'react';
import styled from 'styled-components';
import { SectionsTitle } from '../../../components/SectionsTitle';
import { Icon } from '../../../components/icon/Icon';
import { FlexWrapper } from '../../../components/FlexWrapper';

export const Footer = () => {
    return (
        <StyledFooter>
                <FlexWrapper direction='column' align='center'>
                    <SectionsTitle>Svetlana</SectionsTitle>
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
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: #bbebfe;
    min-height: 30vh;
`

const SocialList = styled.ul`
    display: flex;
    gap: 30px ;

`

const SocialItem = styled.li`
    
`


const SocialIconLink = styled.a`
    
`

const Copyright = styled.small`
    
`