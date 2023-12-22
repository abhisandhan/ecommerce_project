import { configureStore } from '@reduxjs/toolkit';
import productReducer from "../features/product/productSlice";
import CartReducer from "../features/cart/cartSlice"

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: CartReducer
  },
});
