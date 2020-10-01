// import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';

import { configureStore } from "@reduxjs/toolkit";

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });


export const store = configureStore({
    reducer : {
      cart : cartReducer
    }
})
export type RootState = ReturnType<typeof store.getState>;
