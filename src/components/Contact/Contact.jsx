import PropTypes from 'prop-types';
import { StyledContainer, DeleteButton } from './Contact.Styled';

export const Contact = ({ contact, onDelete }) => {
  return (
    <li>
      <StyledContainer>
        {contact.name}: {contact.number}
        <DeleteButton
          type="button"
          onClick={() => {
            onDelete(contact.id);
          }}
        >
          Delete
        </DeleteButton>
      </StyledContainer>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string).isRequired,
  onDelete: PropTypes.func.isRequired,
};
