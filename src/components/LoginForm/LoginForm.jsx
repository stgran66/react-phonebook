import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import {
  StyledForm,
  ContactFormLabel,
  ContactFormInput,
  StyledErrorMsg,
} from './LoginForm.styled';
import { Button } from '../Common.styled';
import { logIn } from 'redux/auth/operations';

const initialValues = {
  email: '',
  password: '',
};

const schema = yup.object().shape({
  email: yup.string().email('Please enter valid email').required(),
  password: yup
    .string()
    .min(6, 'Password is too short -should be at least 6 chars')
    .required(),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const HandleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={HandleSubmit}
      validationSchema={schema}
      validateOnChange={false}
      validateOnBlur={true}
    >
      <StyledForm>
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
        <Button type="submit">Log in</Button>
      </StyledForm>
    </Formik>
  );
};
