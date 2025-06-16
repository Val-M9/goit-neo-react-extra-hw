import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { fetchContacts, addContact, deleteContact } from './operations'

const handlePending = (state) => {
  state.isLoading = true
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.error = null
        state.items = payload
      })
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.error = null
        state.items.push(payload)
      })
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.error = null
        state.items = state.items.filter((item) => item.id !== payload.id)
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false
          state.error = payload
        }
      )
  },
})

export const contactsReducer = contactsSlice.reducer
