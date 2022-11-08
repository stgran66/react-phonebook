import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const response = await axios.post('/contacts', { name, number });
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
