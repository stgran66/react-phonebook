import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const extraActions = [fetchContacts, addContact, deleteContact];

const getActionsByType = type => extraActions.map(action => action[type]);

const fetchContactsReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.entities = action.payload;
};

const addContactReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.entities.push(action.payload);
};

const deleteContactReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.entities.findIndex(
    contact => contact.id === action.payload.id
  );
  state.entities.splice(index, 1);
};

const pendingReducer = state => {
  state.isLoading = true;
};

const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'entities',
  initialState: {
    entities: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsReducer)
      .addCase(addContact.fulfilled, addContactReducer)
      .addCase(deleteContact.fulfilled, deleteContactReducer)
      .addMatcher(isAnyOf(...getActionsByType('pending')), pendingReducer)
      .addMatcher(isAnyOf(...getActionsByType('rejected')), rejectedReducer),
});

export const contactsReducer = contactsSlice.reducer;
