import { Content, MessageContainer } from 'components/Common.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';

export default function Contacts() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Content>
      <ContactForm />
      <Filter />
      <MessageContainer>
        {isLoading && <b>Loading contacts...</b>}
        {error && <b>{error}</b>}
      </MessageContainer>
      <ContactList />
    </Content>
  );
}
