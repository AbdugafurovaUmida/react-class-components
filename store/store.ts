import { configureStore } from '@reduxjs/toolkit'
import { swaApi } from '../services/swapi'
import { peopleSlice } from '../slices/peopleSlice'
import { createWrapper } from 'next-redux-wrapper'

export const makeStore = () => {
  return configureStore({
    reducer: {
      peopleState: peopleSlice.reducer,
      [swaApi.reducerPath]: swaApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(swaApi.middleware),
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export const wrapper = createWrapper(makeStore, { debug: true })
