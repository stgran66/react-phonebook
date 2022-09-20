import PropTypes from 'prop-types';
import { Input } from 'components/Common.styled';
import { StyledFilter } from './Filter.styled';

export const Filter = ({ onFilter }) => {
  return (
    <StyledFilter>
      Find contacts by name:
      <Input type="text" name="filter" onChange={onFilter} />
    </StyledFilter>
  );
};

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};
