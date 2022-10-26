import { Formik } from 'formik';
import * as yup from 'yup';
import { Notify } from 'notiflix';
import { addContact } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

import {
  StyledForm,
  ContactFormLabel,
  ContactFormInput,
  StyledErrorMsg,
} from './ContactForm.styled';
import { Button } from '../Common.styled';

const initialValues = {
  name: '',
  number: '',
};

const nameRegex = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const numberRegex =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      nameRegex,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan "
    )
    .required(),
  number: yup
    .string()
    .matches(
      numberRegex,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const HandleSubmit = (values, { resetForm }) => {
    const { name, number } = values;

    if (contacts.some(contact => contact.name === name)) {
      return Notify.failure(`${name} is already in contacts`);
    }

    resetForm();
    dispatch(addContact(name, number));
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={HandleSubmit}
      validationSchema={schema}
      validateOnChange={false}
      validateOnBlur={false}
    >
      <StyledForm>
        <ContactFormLabel>
          Name:
          <ContactFormInput type="text" name="name" />
        </ContactFormLabel>
        <StyledErrorMsg name="name" component="p" />

        <ContactFormLabel>
          Number:
          <ContactFormInput type="tel" name="number" />
        </ContactFormLabel>
        <StyledErrorMsg name="number" component="p" />
        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>
  );
};
