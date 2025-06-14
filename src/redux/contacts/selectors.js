import { createSelector } from '@reduxjs/toolkit'
import { selectNameFilter } from '../filters/selectors'

export const selectContacts = (state) => {
  return state.contacts.items
}

export const selectContactsError = (state) => {
  return state.contacts.error
}

export const selectContactsLoading = (state) => {
  return state.contacts.isLoading
}

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
  }
)
