import { configureStore } from '@reduxjs/toolkit'
import cartAdd from '../reducer/cartAdd'
import dataCart from '../reducer/product'
export const store = configureStore({
  reducer: {
    cartAdd: cartAdd,
    dataCart:dataCart
  },
})