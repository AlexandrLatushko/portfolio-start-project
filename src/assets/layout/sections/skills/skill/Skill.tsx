import React from 'react';
import { Icon } from '../../../../../components/icon/Icon';
import { S } from './Skills_Styles';
import { IconWrapper } from './Skills_Styles';

type SkillPropsType = {
    iconId: string
    title: string
    description: string

}

export const Skill = (props: SkillPropsType) => {
    return (
        <S.Skill>
            <IconWrapper>
                <Icon iconId={props.iconId}/>
            </IconWrapper>
            
            <S.SkillTitle>{props.title}</S.SkillTitle>
            <S.SKillText>{props.description}</S.SKillText>
        </S.Skill>
    );
};

