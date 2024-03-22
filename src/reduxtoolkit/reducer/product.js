import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    name: 'com ga',
    gia: 1200,
  },
  {
    name: 'ga ran',
    gia: 1300,
  },
  {
    name: 'salat',
    gia: 1400,
  },
  {
    name: 'chung',
    gia: 1500,
  },
  {
    name: 'ga con',
    gia: 1600,
  },
]

export const dataCart = createSlice({
  name: 'dataCart',
  initialState,
  reducers: {
  },
});


// Action creators are generated for each case reducer function


export default dataCart.reducer