import React from 'react';
import styled, { css }  from 'styled-components';
import { theme } from '../../../../styles/Theme';

export const MobileMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={true}> 
                <span></span>
            </BurgerButton>

            <MobileMenuPopup isOpen={true}>
                <ul>
                    {props.menuItems.map((item:string, index:number)=>{
                        return <ListItem key={index}> 
                        <LinkItem href="#">
                            {item}
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                        
                        </LinkItem> 
                    </ListItem>
                    })}
                </ul>
            </MobileMenuPopup>
            
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
    
    display: none;  //по умолчанию этого мобильного меню отображаться не будет (только для мобильных)


    @media ${theme.media.tablet} { //задаем из темы медиазапрос
        display: block;             // при экране меньше чем задано дло tablet этот блок появится  
    }
    
`

const MobileMenuPopup = styled.div<{isOpen:boolean}>`
    
    position: fixed;
    top: 0;       //так мы фиксируем и растягиваем свой попап(всплыв меню на мобтлках) по всему окну
    left: 0; 
    right: 0;
    bottom: 0;
    z-index: 9999; //делаем чтьобы наш попап был над всеми элеиентами 
    background-color: hsla(240, 2%, 12%, 0.9);
    display: none; //по умолчанию менюшка мобильная будет закрыта

    ${props => props.isOpen && css<{isOpen: boolean}> `
        display: flex;
        align-items: center;
        justify-content: center;
    `}

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 30px;
    }
`

const BurgerButton = styled.button<{isOpen:boolean}>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 9999999999999;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.font};
        position: absolute;
        left: 40px;
        bottom: 50px;

        //при приходе пропсов по открытию/закрытию попапменю будут применяться эти условия 
        ${props => props.isOpen && css<{isOpen: boolean}> ` 
            background-color: rgba(255, 255, 255, 0);`}    

        &::before{
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(-10px);
        //при приходе пропсов по открытию/закрытию попапменю будут применяться эти условия 
        ${props => props.isOpen && css<{isOpen: boolean}> ` 
            transform:rotate(-45deg) translateY(0);
        `}
        }

        &::after{
            content:"";
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(10px);
        
         //при приходе пропсов по открытию/закрытию попапменю будут применяться эти условия 
        ${props => props.isOpen && css<{isOpen: boolean}> ` 
            transform:rotate(45deg) translateY(0);
            width:36px;
        `}
        }
    }
`

const LinkItem = styled.a`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 30px;
    font-weight: 400;
    color: transparent;

`

const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow-y: hidden;
    /* outline: 1px solid red; */
    color: ${theme.colors.accent};

    & + & {
        top: 50%;
        span {
            display: inline-block;
            transform: translateY(-50% );
        }

    }
`

const ListItem = styled.li`
    position: relative;

    &::before {
        content: " ";
        display: inline-block;
        height: 3px;
        background-color: ${theme.colors.accent};

        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 1;

        transform: scale(0);
    }

    &:hover {
        &::before {
            transform: scale(1);

        }

        ${Mask} {
            transform: skewX(12deg) translateX(5px);
            color: ${theme.colors.font};

            &  + ${Mask} {
                transform: skewX(12deg) translateX(-5px);
            }
        }

    }
`