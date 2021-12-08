import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   value: 0,
// }
const initialState = {count: 0, number: 1};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += +state.number
    },
    decrement: (state) => {
      state.count -= +state.number
    },
    numberBadha: (state, action) => {
      state.number = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, numberBadha } = counterSlice.actions

export default counterSlice.reducer