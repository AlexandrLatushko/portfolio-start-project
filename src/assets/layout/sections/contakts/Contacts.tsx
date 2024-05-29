import React from 'react';
import styled from 'styled-components';
import { SectionsTitle } from '../../../../components/SectionsTitle';
import { Button } from '../../../../components/Button';

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionsTitle>Contact</SectionsTitle>
            <StyledForm>
                <Field placeholder='name'/>
                <Field placeholder='subject'/>
                <Field placeholder='message' as={"textarea"}/>
                <Button type='submit'>Send message</Button>
            </StyledForm>
        </StyledContacts>
    );  
};

const StyledContacts = styled.section`
    min-height:50vh;
    background-color: #85ffce74;
`

const StyledForm = styled.form`
    margin: 0 auto;
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Field = styled.input`
    
`

