import { StyledNav, StyledNavLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <StyledNav>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/tasks">Tasks</StyledNavLink>
    </StyledNav>
  );
};
