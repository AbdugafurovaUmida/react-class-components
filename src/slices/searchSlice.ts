import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SearchState {
  query: string
  currentPage: number
  totalPages: number
}

const initialState: SearchState = {
  query: '',
  currentPage: 1,
  totalPages: 1,
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.query = action.payload
      localStorage.setItem('searchQuery', action.payload)
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload
    },
    setTotalPages(state, action: PayloadAction<number>) {
      state.totalPages = action.payload
    },
    restoreSearchQuery(state) {
      const savedQuery = localStorage.getItem('searchQuery')
      if (savedQuery) {
        state.query = savedQuery
      }
    },
  },
})

export const { setSearchQuery, setCurrentPage, setTotalPages, restoreSearchQuery } =
  searchSlice.actions
export default searchSlice.reducer
