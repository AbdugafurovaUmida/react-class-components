import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import People from '../types/people'

export interface peopleState {
  list: People[]
  recently: People[]
}

const initialState: peopleState = {
  list: [],
  recently: [],
}

export const peopleSlice = createSlice({
  name: 'peopleSlice',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<People>) => {
      if (state.list.find((item) => item.name === action.payload.name)) {
        state.list = state.list.filter((item) => item.name !== action.payload.name)
      } else {
        state.list.push(action.payload)
      }
    },

    selectAll: (state, action: PayloadAction<People[]>) => {
      action.payload.forEach((item) => {
        if (!state.list.find((i) => i.name === item.name)) {
          state.list.push(item)
        }
      })
    },

    clearAll: (state) => {
      state.list = []
    },

    removeItem: (state, action: PayloadAction<People>) => {
      state.list = state.list.filter((item) => item.name !== action.payload.name)
    },
    addToRecently: (state, action: PayloadAction<People>) => {
      if (state.recently.find((item) => item.name === action.payload.name)) return
      if (state.recently.length === 5) {
        state.recently.shift()
      }
      state.recently.push(action.payload)
    },
  },
})

export const { addItem, selectAll, removeItem, addToRecently, clearAll } = peopleSlice.actions

export default peopleSlice.reducer
