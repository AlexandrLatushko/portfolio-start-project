import React, { useState } from 'react';
import { SectionsTitle } from '../../../../components/SectionsTitle';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import socialImg from '../../../../assets/images/proj1.webp'
import timerImg from '../../../../assets/images/proj2.webp'
import { Work } from './work/Work';
import { Container } from '../../../../components/Container';
import { TabMenu } from './tabMenu/TabMenu';
import { S } from './work/Works_Styles';


// const tabsitems = ["All", "landing page", "React", "spa"]

const tabsItems: Array<{status: "all" | "landing" | "react" | "spa" ,title: string}>  = [
    {
        title:"All",
        status:"all",
    },
    {
        title:"landing page",
        status:"landing",
    },
    {
        title:"React",
        status:"react",
    },
    {
        title:"spa",
        status:"spa",
    },
]

const worksData = [
    {
        title:"Social Network",
        text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        src: socialImg,
        type: "spa"
    },
    {
        title:"Timer",
        text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        src: timerImg,
        type: "React"

    }
]

export const Works:React.FC = () => {

    const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
    let filteredWorks = worksData

    if(currentFilterStatus === "landing") {
        filteredWorks = worksData.filter(work => work.type === "landing" )
    }
    if(currentFilterStatus === "react") {
        filteredWorks = worksData.filter(work => work.type === "react" )
    }
    if(currentFilterStatus === "spa") {
        filteredWorks = worksData.filter(work => work.type === "spa" )
    } 

    function chengeFilterStatus (value: "all" | "landing" | "react" | "spa") {
        setCurrentFilterStatus(value)
    }

    return (
        <S.Works>
            <Container>
                <SectionsTitle>My Works</SectionsTitle>
                <TabMenu tabsItems={tabsItems} 
                chengeFilterStatus={chengeFilterStatus}
                currentFilterStatus={currentFilterStatus}
                />
                <FlexWrapper justify={"space-around"} wrap='wrap' >

                    {filteredWorks.map((w )=> {
                        return <Work title={w.title} text={w.text}
                        src={w.src} />
                    })}

                </FlexWrapper>
            </Container>
            
            
        </S.Works>
    );
};

