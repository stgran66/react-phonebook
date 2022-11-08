import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import pin from '../../images/round-pushpin.png';
export const StyledNav = styled.nav`
  display: flex;
  gap: 30px;
`;

export const StyledNavLink = styled(NavLink)`
  font-family: cursive;
  text-decoration: none;
  padding-top: 20px;
  padding-bottom: 20px;

  cursor: pointer;
  color: #010101;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  min-width: 65px;
  min-height: 35px;
  background: linear-gradient(135deg, #e5c93d, 30%, #ffed87);
  box-shadow: 3px 3px 2px var(--paper-shadow);
  transform: rotate(10deg);
  transform-origin: top left;
  transition: transform linear 250ms;

  ::after {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(transparent, 50%, #ffed87, 51%, transparent),
      linear-gradient(to right, transparent, 50%, #ffed87, 51%, transparent);
  }

  &.active {
    color: red;
    ::before {
      content: '';
      position: absolute;
      left: 0;
      top: -20px;
      background-image: url(${pin});
      height: 48px;
      width: 48px;
      transform: rotate(45deg);
      z-index: 100;
    }
  }
  :hover,
  :focus {
    color: red;
    transform: rotate(-5deg);
  }
`;
