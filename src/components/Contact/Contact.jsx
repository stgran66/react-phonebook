import PropTypes from 'prop-types';
import { StyledContainer, DeleteButton } from './Contact.Styled';
import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <li>
      <StyledContainer>
        {contact.name}: {contact.number}
        <DeleteButton type="button" onClick={handleDelete}>
          Delete
        </DeleteButton>
      </StyledContainer>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string).isRequired,
};
