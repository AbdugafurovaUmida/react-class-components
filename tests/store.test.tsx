import { describe, it, expect } from 'vitest'
import { configureStore } from '@reduxjs/toolkit'
import { swaApi } from '../services/swapi'
import { peopleSlice } from '../slices/peopleSlice'
import { store } from '../store/store'

describe('Redux Store', () => {
  it('should configure the store with peopleSlice and swaApi reducers', () => {
    const configuredStore = configureStore({
      reducer: {
        peopleState: peopleSlice.reducer,
        [swaApi.reducerPath]: swaApi.reducer,
      },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(swaApi.middleware),
    })

    expect(store.getState()).toEqual(configuredStore.getState())
  })
})
