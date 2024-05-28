import React from 'react';
import { Icon } from '../../../../../components/icon/Icon';
import styled from 'styled-components';

type SkillPropsType = {
    iconId: string
    title: string
    description: string

}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}/>
            <SkillTitle>{props.title}</SkillTitle>
            <SKillText>{props.description}</SKillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 33%;
    background-color: #dfc9c9;
`

const SkillTitle = styled.h3`

`

const SKillText = styled.p`

`
