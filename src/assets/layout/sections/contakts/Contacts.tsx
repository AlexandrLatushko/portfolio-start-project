  import styled from 'styled-components';
import { SectionsTitle } from '../../../../components/SectionsTitle';
import { Button } from '../../../../components/Button';
import { Container } from '../../../../components/Container';
import { theme } from '../../../../styles/Theme';

export const Contacts = () => {
    return (
        <StyledContacts>
            
            <Container>
                <SectionsTitle>Contact</SectionsTitle>
                <StyledForm>
                    <Field placeholder='name'/>
                    <Field placeholder='subject'/>
                    <Field placeholder='message' as={"textarea"}/>
                    <Button type='submit'>Send message</Button>
                </StyledForm>
            </Container>
            
        </StyledContacts>
    );  
};

const StyledContacts = styled.section`
`

const StyledForm = styled.form`
    margin: 0 auto;
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    textarea {
        resize: none; // пользлватель не сможет тянуть за угол изменяя размер текстерии
        height: 155px;
    }
`

const Field = styled.input`
    width: 100%;
    border: 1px solid #4a4a4a;
    background-color: #252527;
    padding: 7px 15px;

    font-family: 'Poppins',sans-serif;
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.05em;
    color: ${theme.colors.font};

    &::placeholder {
        color: #495057;
        text-transform: capitalize;
    }

    &:focus-visible {
        outline: 1px solid #4a4a4a ;
    }
`

