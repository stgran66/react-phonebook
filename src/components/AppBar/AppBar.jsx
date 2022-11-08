import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { PageHeader } from './AppBar.styled';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <PageHeader>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </PageHeader>
  );
};
