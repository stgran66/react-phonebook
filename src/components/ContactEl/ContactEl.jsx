import PropTypes from 'prop-types';
import { StyledContactElContainer, DeleteButton } from './ContactEl.Styled';

export const ContactEl = ({ contact, onDelete }) => {
  return (
    <li>
      <StyledContactElContainer>
        {contact.name}: {contact.number}
        <DeleteButton
          type="button"
          onClick={() => {
            onDelete(contact.id);
          }}
        >
          Delete
        </DeleteButton>
      </StyledContactElContainer>
    </li>
  );
};

/*
ContactEl.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string).isRequired,
  onDelete: PropTypes.func.isRequired,
};
*/
