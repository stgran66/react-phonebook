import { Container } from './AuthNav.styled';
import { StyledNavLink } from 'components/Navigation/Navigation.styled';

export const AuthNav = () => {
  return (
    <Container>
      <StyledNavLink to="/register">Register</StyledNavLink>
      <StyledNavLink to="/login">Log In</StyledNavLink>
    </Container>
  );
};
