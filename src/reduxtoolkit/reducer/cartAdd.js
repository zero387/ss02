import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.getItem('cart')) ||  [];

export const cartAdd = createSlice({
  name: 'CartAdd',
  initialState,
  reducers: {
    addCart: (state, action) => {
      const { name, gia } = action.payload;
      const existingItem = state.find((item) => {
        return item.name === name;
      });
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.push({ name, gia, quantity: 1 });
      }
      localStorage.setItem('cart', JSON.stringify(state));
    },
    up: (state, action) => {
      console.log("ffffffff",action.payload);
      state[action.payload].quantity++;
      localStorage.setItem('cart', JSON.stringify(state));
    },
    dow: (state, action) => {
     state[action.payload].quantity--;
      localStorage.setItem('cart', JSON.stringify(state));
    },
  },
});


// Action creators are generated for each case reducer function
export const { addCart, up, dow } = cartAdd.actions

export default cartAdd.reducer