import { Content, MessageContainer } from 'components/Common.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';

export default function Tasks() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
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
