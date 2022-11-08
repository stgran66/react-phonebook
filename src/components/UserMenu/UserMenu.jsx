import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import { StyledUserMenu } from './UserMenu.styled';
import { Button } from 'components/Common.styled';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const handleClick = () => {
    dispatch(logOut());
  };
  return (
    <StyledUserMenu>
      <p>Hello, {userName}</p>
      <Button type="button" onClick={handleClick}>
        Logout
      </Button>
    </StyledUserMenu>
  );
};
