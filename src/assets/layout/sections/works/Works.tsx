import React from 'react';
import { SectionsTitle } from '../../../../components/SectionsTitle';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import socialImg from '../../../../assets/images/proj1.webp'
import timerImg from '../../../../assets/images/proj2.webp'
import { Work } from './work/Work';
import { Container } from '../../../../components/Container';
import { TabMenu } from './tabMenu/TabMenu';
import { S } from './work/Works_Styles';


const worksitems = ["All", "landing page", "React", "spa"]

const workData = [
    {
        title:"Social Network",
        text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        src: socialImg
    },
    {
        title:"Timer",
        text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        src: timerImg
    }
]

export const Works:React.FC = () => {
    return (
        <S.Works>
            <Container>
                <SectionsTitle>My Works</SectionsTitle>
                <TabMenu menuItems={worksitems}/>
                <FlexWrapper justify={"space-around"} wrap='wrap' >

                    {workData.map((w )=> {
                        return <Work title={w.title} text={w.text}
                        src={w.src} />
                    })}

                </FlexWrapper>
            </Container>
            
            
        </S.Works>
    );
};

