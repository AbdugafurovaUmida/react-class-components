import { configureStore } from '@reduxjs/toolkit'

// Import your reducers here
import counterReducer from '../slices/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Add more reducers as needed
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
