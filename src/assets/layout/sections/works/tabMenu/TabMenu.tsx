import React from 'react';
import styled from 'styled-components';
import { Link } from '../../../../../components/Link';

export const TabMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledTabMemu>
            <ul>

                {props.menuItems.map((item:string, index:number)=>{
                    return  <ListItem key={index}> 
                        <Link href="#">{item}</Link> 
                            </ListItem>
                })}

            </ul>
        </StyledTabMemu>
    );
};

const StyledTabMemu = styled.nav`
    margin-bottom: 40px;
    ul {
        display: flex;
        justify-content: center;
        gap: 20px;
    }
    
`
const ListItem  = styled.li`
    
    
`

