import styled from 'styled-components';

export const StyledUserMenu = styled.div`
  font-family: cursive;
  text-decoration: none;

  cursor: pointer;
  color: #010101;

  position: relative;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  min-width: 65px;
  min-height: 35px;
  background: linear-gradient(135deg, #e5c93d, 30%, #ffed87);
  box-shadow: 3px 3px 2px var(--paper-shadow);
  transform: rotate(3deg);
  transform-origin: top left;
  transition: transform linear 250ms;

  ::after {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        transparent,
        20%,
        #ffed87,
        21%,
        transparent,
        78%,
        #ffed87,
        79%,
        transparent
      ),
      linear-gradient(to right, transparent, 48%, #ffed87, 49%, transparent);
  }
`;
