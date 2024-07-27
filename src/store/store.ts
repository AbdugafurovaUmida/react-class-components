import { configureStore } from '@reduxjs/toolkit'
import { swaApi } from '../services/swapi'
import searchReducer from '../slices/searchSlice'
import { selectedItems } from '../slices/selectedItems'

export const store = configureStore({
  reducer: {
    [swaApi.reducerPath]: swaApi.reducer,
    search: searchReducer,
    selectedItems: selectedItems.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(swaApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
