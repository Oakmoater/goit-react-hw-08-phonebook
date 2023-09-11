import axios from 'axios';
import {
  createSlice,
  createEntityAdapter,
  createSelector,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import { logOut } from '../auth/operations';
import { toast } from 'react-toastify';
import { checkErrors } from 'utilities/checks';

const contactsAdapter = createEntityAdapter();

const initialState = contactsAdapter.getInitialState({
  isLoading: false,
  error: null,
});

export const fetchContacts = createAsyncThunk(
  'contact/fetchContacts',
  async (_, rejectWithValue) => {
    try {
      const response = await axios.get('contacts');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContactAsync = createAsyncThunk(
  'contacts/addContactAsync',
  async (newContact, { getState, rejectWithValue }) => {
    const contacts = selectContacts(getState());
    const contactExists = contacts.find(
      ({ name, number }) =>
        name === newContact.name || number === newContact.number
    );

    if (contactExists) {
      return rejectWithValue('This contact is already added');
    }

    try {
      const response = await axios.post('contacts', newContact);
      toast.success('Contact successfully added', {
        toastId: 'added',
      });
      return response.data;
    } catch (error) {
      toast.error(
        checkErrors('contacts/addContactAsync', error.response.status)
      );
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContactAsync = createAsyncThunk(
  'contacts/deleteContactAsync',
  async (id, rejectWithValue) => {
    try {
      await axios.delete(`contacts/${id}`);
      toast.success('Contact successfully deleted', {
        toastId: 'deleted',
      });
      return id;
    } catch (error) {
      toast.error(
        checkErrors('contacts/deleteContactAsync', error.response.status)
      );
      return rejectWithValue(error.message);
    }
  }
);

const asyncActions = [fetchContacts, addContactAsync, deleteContactAsync];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  //thunk
  extraReducers: builder => {
    builder
      .addCase(logOut.fulfilled, state => {
        contactsAdapter.removeAll(state);
      })
      .addMatcher(
        action =>
          asyncActions.some(
            asyncAction => action.type === asyncAction.pending.toString()
          ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        action =>
          asyncActions.some(
            asyncAction => action.type === asyncAction.fulfilled.toString()
          ),
        (state, action) => {
          if (action.type === fetchContacts.fulfilled.toString()) {
            contactsAdapter.setAll(state, action.payload);
          } else if (action.type === addContactAsync.fulfilled.toString()) {
            contactsAdapter.addOne(state, action.payload);
          } else if (action.type === deleteContactAsync.fulfilled.toString()) {
            contactsAdapter.removeOne(state, action.payload);
          }
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        action =>
          asyncActions.some(
            asyncAction => action.type === asyncAction.rejected.toString()
          ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export const { selectAll: selectContacts, selectById: selectContactById } =
  contactsAdapter.getSelectors(state => state.contacts);

export const selectContactIds = createSelector(selectContacts, contacts =>
  contacts.map(contact => contact.id)
);

export const selectFilteredContactsIds = createSelector(
  [selectContacts, state => state.filter],
  (contacts, filter) =>
    contacts
      .filter(
        contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase()) ||
          contact.number.replace(/\D/g, '').includes(filter)
      )
      .map(contact => contact.id)
);
