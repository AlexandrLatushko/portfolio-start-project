import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';

export const GoTopBtn = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) { // Пороговое значение, ниже которого кнопка скрывается
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <StyledGoTopBtn id="hom" onClick={scrollToTop}>
                    <Icon iconId='arrow' width="16" height="15" viewBox="0 0 16 15"/>
                </StyledGoTopBtn>
            )}
        </>
    );
};

const StyledGoTopBtn = styled.button`
    background-color: rgba(0, 0, 0, 0.3);
    padding: 8px;
    position: fixed;
    right: 30px;
    bottom: 30px;
    border: none;
    cursor: pointer;
    transition: opacity 0.3s, visibility 0.3s;
    opacity: 0.8;

    &:hover {
        background-color: rgba(0, 0, 0, 0.5);
    }
`;