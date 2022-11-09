import { useDispatch } from 'react-redux';
import { Input } from 'components/Common.styled';
import { StyledFilter } from './Filter.styled';
import { setFilter } from 'redux/filter/slice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    const userInput = e.target.value;

    dispatch(setFilter(userInput));
  };

  return (
    <StyledFilter>
      Find contacts by name:
      <Input type="text" name="filter" onChange={handleFilterChange} />
    </StyledFilter>
  );
};
