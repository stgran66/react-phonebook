import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import {
  Container,
  MainHeading,
  Content,
  MessageContainer,
} from './Common.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Content>
        <MainHeading>Phonebook</MainHeading>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <MessageContainer>
          {isLoading && <b>Loading contacts...</b>}
          {error && <b>{error}</b>}
        </MessageContainer>
        <ContactList />
      </Content>
    </Container>
  );
};
