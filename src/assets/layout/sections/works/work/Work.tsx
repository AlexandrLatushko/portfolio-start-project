import React from 'react';
import styled from 'styled-components';
import { Link } from '../../../../../components/Link';
import { theme } from '../../../../../styles/Theme';
import { Button } from '../../../../../components/Button';

type WorkPropsType = {
    title: string
    text: string
    src: string
}

export const Work = (props: WorkPropsType ) => {
    return (
        <StyledWors>
            
            <ImageWrapper>
                <Image src={props.src} alt='img proj'/>    
                <Button>view project</Button>
            </ImageWrapper>
            
            <Deskription>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <Link href={"#"}>demo</Link>
                <Link href={"#"}>Code</Link>
            </Deskription>

        </StyledWors>
    );
};

const StyledWors = styled.div`
    background-color: ${theme.colors.secondaryBg};
    width: 330px; //такой как на мобилках
    flex-grow: 1; //флекс элемент будет занимать всю свободную чать  

    ${Link} {
        padding: 10px 0;
        margin-right:20px;
    }

    @media ${theme.media.desktop} {
        max-width: 540px;
    }
`

const ImageWrapper = styled.div`
    position: relative;

    ${Button} {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        z-index: 0;

        &::before{
            width: 100%;
            height: 100%;
            z-index: -1;
        }
    }

    &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(4px);
        opacity: 0;
        }

        &:hover {
            &::before {
                opacity: 1;
            }
            ${Button} {
            opacity: 1; //делаем видимым при наведении 
        } 
        }

        @media ${theme.media.tablet} { // во всех случаях будет прозрачность (но при начедении видна кнопка)
            &::before {
                opacity: 1;
            }

            ${Button} {
            opacity: 1; //делаем видимым при наведении 
            } 
        }
`

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const Deskription = styled.div`
    padding: 25px 20px;
`

const Title = styled.h3`
    
`

const Text = styled.p`
    margin: 14px 0 10px;
`

