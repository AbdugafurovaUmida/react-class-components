import { configureStore } from '@reduxjs/toolkit'
import { swaApi } from '../services/swapi'
import { peopleSlice } from '../slices/peopleSlice'

export const store = configureStore({
  reducer: {
    peopleState: peopleSlice.reducer,
    [swaApi.reducerPath]: swaApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(swaApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
