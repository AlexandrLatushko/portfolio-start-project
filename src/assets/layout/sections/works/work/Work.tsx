import React from 'react';
import styled from 'styled-components';

type WorkPropsType = {
    title: string
    text: string
    src: string
}

export const Work = (props: WorkPropsType ) => {
    return (
        <StyledWors>
            <Image src={props.src} alt='img proj'/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href={"#"}>demo</Link>
            <Link href={"#"}>Code</Link>
        </StyledWors>
    );
};

const StyledWors = styled.div`
    background-color: #baff8943;
    max-width: 540px;
    width: 100%;
`

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`
const Link = styled.a`
    
`

const Title = styled.h3`
    
`

const Text = styled.p`
    
`