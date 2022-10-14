import { useState, useRef } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Container, MainHeading, Content } from './Common.styled';
import { useEffect } from 'react';

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

const LS_KEY = 'saved_contacts';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const initialRender = useRef(true);

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem(LS_KEY));

    if (initialRender.current && savedContacts) {
      setContacts(savedContacts);
    }

    if (!initialRender.current) {
      localStorage.setItem(LS_KEY, JSON.stringify(contacts));
    }

    initialRender.current = false;
  }, [contacts]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  const addContact = values => {
    const { name, number } = values;

    if (contacts.some(contact => contact.name === name)) {
      return Notify.failure(`${name} is already in contacts`);
    }

    setContacts(prevState => [...prevState, { name, id: nanoid(), number }]);
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const onFilter = e => {
    setFilter(e.currentTarget.value.toLowerCase().trim());
  };

  return (
    <Container>
      <Content>
        <MainHeading>Phonebook</MainHeading>
        <ContactForm onSubmit={addContact} />
        <h2>Contacts</h2>
        <Filter onFilter={onFilter} />
        <ContactList
          filteredContacts={filteredContacts}
          onDelete={deleteContact}
        />
      </Content>
    </Container>
  );
};
