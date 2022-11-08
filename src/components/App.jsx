import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { AppBar } from './AppBar/AppBar';

import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { Layout } from './Layout';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const TasksPage = lazy(() => import('../pages/Tasks'));

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/tasks" element={<TasksPage />} />
      </Route>
    </Routes>
    // <Container>
    //   <AppBar />
    //   <Content>
    //     <MainHeading>Phonebook</MainHeading>
    //     <ContactForm />
    //     <h2>Contacts</h2>
    //     <Filter />
    //     <MessageContainer>
    //       {isLoading && <b>Loading contacts...</b>}
    //       {error && <b>{error}</b>}
    //     </MessageContainer>
    //     <ContactList />
    //   </Content>
    // </Container>
  );
};
