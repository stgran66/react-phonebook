import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import {
  StyledForm,
  ContactFormLabel,
  ContactFormInput,
  StyledErrorMsg,
} from './RegisterForm.styled';
import { Button } from '../Common.styled';
import { register } from '../../redux/auth/operations';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ0-9\s\-.]+$/, 'Please enter valid name')
    .required(),
  email: yup.string().email('Please enter valid email').required(),
  password: yup
    .string()
    .min(6, 'Password is too short -should be at least 6 chars')
    .required(),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const HandleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={HandleSubmit}
        validationSchema={schema}
        validateOnChange={false}
        validateOnBlur={true}
      >
        <StyledForm>
          <ContactFormLabel>
            Name:
            <ContactFormInput type="text" name="name" />
          </ContactFormLabel>
          <StyledErrorMsg name="name" component="p" />
          <ContactFormLabel>
            Email:
            <ContactFormInput type="email" name="email" />
          </ContactFormLabel>
          <StyledErrorMsg name="email" component="p" />

          <ContactFormLabel>
            Password:
            <ContactFormInput type="password" name="password" />
          </ContactFormLabel>
          <StyledErrorMsg name="password" component="p" />
          <Button type="submit">Register</Button>
        </StyledForm>
      </Formik>
    </>
  );
};
