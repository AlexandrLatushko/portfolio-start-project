import styled from "styled-components"
import { theme } from "../../../../styles/Theme"

const Contacts = styled.section`
    position: relative;
`

const Form = styled.form`
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

    export const S = {
        Contacts,
        Form,
        Field,

    }