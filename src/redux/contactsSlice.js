import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsInitialState } from './constants';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  reducers: {
    addContact: {
      reducer(state, action) {
        state.data.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.data.findIndex(
        contact => contact.id === action.payload
      );
      state.data.splice(index, 1);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
