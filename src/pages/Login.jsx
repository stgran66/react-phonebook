import { LoginForm } from 'components/LoginForm/LoginForm';
import { Content } from 'components/Common.styled';
import { useSelector } from 'react-redux';
import { selectError } from 'redux/auth/selectors';

export default function Login() {
  const error = useSelector(selectError);

  return (
    <Content>
      <h2>Log in</h2>
      <LoginForm />
      {error && <b>{error}</b>}
    </Content>
  );
}
