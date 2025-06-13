import { createSlice } from '@reduxjs/toolkit'

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    changeFilter: (state, { payload }) => {
      state.name = payload
    },
  },
})

export const filtersReducer = filtersSlice.reducer
export const { changeFilter } = filtersSlice.actions

export const selectNameFilter = (state) => {
  return state.filters.name
}
