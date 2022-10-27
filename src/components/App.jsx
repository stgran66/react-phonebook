import { Notify } from 'notiflix';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Container, MainHeading, Content } from './Common.styled';

Notify.init({
  position: 'center-top',
  width: '460px',
  useIcon: false,
  fontFamily: 'Garamond',
  fontSize: '28px',
  failure: {
    background: 'transparent',
    textColor: '#ac3235',
  },
});

export const App = () => {
  return (
    <Container>
      <Content>
        <MainHeading>Phonebook</MainHeading>
        <ContactForm onSubmit={() => {}} />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Content>
    </Container>
  );
};
