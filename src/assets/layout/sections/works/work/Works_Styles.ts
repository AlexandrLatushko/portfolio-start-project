import styled from 'styled-components';
import { theme } from '../../../../../styles/Theme';
import { Link } from '../../../../../components/Link';
import { Button } from '../../../../../components/Button';
import { FlexWrapper } from '../../../../../components/FlexWrapper';

const Works = styled.section` 
    ${FlexWrapper} {
        gap: 30px;
    }
    position: relative;
`

const Work = styled.div`
    background-color: ${theme.colors.secondaryBg};
    width: 330px; //такой как на мобилках
    flex-grow: 1;
    max-width: 540px; //флекс элемент будет занимать всю свободную чать  

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
        transition: ${theme.animation.transition};
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
        backdrop-filter: blur(2px);
        opacity: 0;
        transition: ${theme.animation.transition};
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

export const S = {
    Works,
    Work,
    ImageWrapper,
    Image,
    Deskription,
    Title,
    Text
}