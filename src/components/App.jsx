import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Container, MainHeading, Content } from './Common.styled';

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
