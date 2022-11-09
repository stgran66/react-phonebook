import { useSelector } from 'react-redux';
import { StyledNav, StyledNavLink } from './Navigation.styled';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <StyledNav>
      <StyledNavLink to="/">Home</StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </StyledNav>
  );
};
