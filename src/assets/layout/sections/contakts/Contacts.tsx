import { SectionsTitle } from '../../../../components/SectionsTitle';
import { Button } from '../../../../components/Button';
import { Container } from '../../../../components/Container';
import { S } from './Contakts_Styles';

export const Contacts:React.FC = () => {
    return (
        <S.Contacts id={'contact'}>
            
            <Container>
                <SectionsTitle>Contact</SectionsTitle>
                <S.Form>
                    <S.Field placeholder='name'/>
                    <S.Field placeholder='subject'/>
                    <S.Field placeholder='message' as={"textarea"}/>
                    <Button type='submit'>Send message</Button>
                </S.Form>
            </Container>
            
        </S.Contacts>
    );  
};




