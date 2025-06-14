import { createAsyncThunk } from '@reduxjs/toolkit'
import { contactsService } from '../../api/contactsService'

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await contactsService.getContacts()
      return data
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (payload, thunkAPI) => {
    try {
      const data = await contactsService.createContact(payload)
      return data
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      return await contactsService.deleteContact(contactId)
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)
