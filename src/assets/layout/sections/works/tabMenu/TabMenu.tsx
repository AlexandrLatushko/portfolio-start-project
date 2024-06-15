import React from 'react';
import styled from 'styled-components';
import { Link } from '../../../../../components/Link';

type TabMenuPropsType = {
    tabsItems: Array<{status: "all" | "landing" | "react" | "spa" ,title: string}>
    chengeFilterStatus: (value: "all" | "landing" | "react" | "spa") => void
    currentFilterStatus: string
}

export const TabMenu = (props: TabMenuPropsType ) => {
    return (
        <StyledTabMemu>
            <ul>

                {props.tabsItems.map((item, index)=>{
                    return  <ListItem key={index}> 
                        <Link active={props.currentFilterStatus === item.status} as={"button"} onClick={()=>{props.chengeFilterStatus(item.status)}}>{item.title}</Link> 
                            </ListItem>
                })}

            </ul>
        </StyledTabMemu>
    );
};

const StyledTabMemu = styled.nav`
    ul {
        display: flex;
        justify-content: space-between;
        max-width: 352px;
        width: 100%;

        margin: 0 auto 40px;
    }
    
`
const ListItem  = styled.li`
    
    
`

