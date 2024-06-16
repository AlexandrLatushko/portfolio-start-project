import React from 'react';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { SectionsTitle } from '../../../../components/SectionsTitle';
import { Skill } from './skill/Skill';
import { Container } from '../../../../components/Container';
import { S } from './skill/Skills_Styles';


const scillData = [
    {
        iconId: 'codeSvg',
        title: "html5",
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'css',
        title: "css3",
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'react',
        title: "React",
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'typescript',
        title: "typescript",
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'styledComponents',
        title: "styled components",
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'figma',
        title: "WEB DESIgN",
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },

]

export const Skills = () => {
    return (
        <S.SectionsSkills id = {"skils"}>
            <Container>
                
                <SectionsTitle>My Skills</SectionsTitle>
                
                <FlexWrapper wrap={'wrap'} justify={'space-between'}> 

                    {scillData.map((s , index )=> {
                        return <Skill iconId={s.iconId} key={index} 
                                    title={s.title} 
                                    description={s.description}/>
                    })}

                </FlexWrapper>
            </Container>
            
        </S.SectionsSkills>
    );
};

  
