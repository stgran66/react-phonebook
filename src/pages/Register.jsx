import { Content } from 'components/Common.styled';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { useSelector } from 'react-redux';
import { selectError } from 'redux/auth/selectors';
export default function Register() {
  const error = useSelector(selectError);
  return (
    <Content>
      <h2>Registration</h2>
      <RegisterForm />
      {error && <b>{error}</b>}
    </Content>
  );
}
