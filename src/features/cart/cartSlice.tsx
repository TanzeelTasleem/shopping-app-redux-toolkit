import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { cartState, payload, Product } from "../../types";

const initialState: cartState = {
  cart: [
    //   {
    //   categoryDefine :"",
    //   details:"",
    //   features : [""],
    //   img : "",
    //   price: 0 ,
    //   quantity : 0 ,
    //   smallImg :"",
    //   title: ""
    // }
  ],
  total: 0,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addIntoCart: (state: cartState, action: PayloadAction<payload>) => {
      if (
        state.cart.some((product) => product.title === action.payload.title)
      ) {
        state.cart.map((product, index) => {
          if (product.title === action.payload.title) {
            state.cart[index].quantity = state.cart[index].quantity + 1;
            state.total = Number(
              (state.total + action.payload.price).toFixed(2)
            );
            return {
              ...state,
            };
          }
          return state;
        });
        return state;
      } else {
        state.cart.push(action.payload);
        state.total = Number((state.total + action.payload.price).toFixed(2));
      }
    },
    removeFromCart: (state: cartState, action) => {
      if (
        state.cart.some(
          (product: Product) => product.title === action.payload.title
        )
      ) {
        state.cart.map((product, index) => {
          if (product.title === action.payload.title) {
            state.total = Number(
              (
                state.total -
                action.payload.price * state.cart[index].quantity
              ).toFixed(2)
            );
            state.cart = state.cart.filter(
              (product: Product) => product.title !== action.payload.title
            );
          }
          return {
            state,
            cart: state.cart,
            total: state.total,
          };
        });
      }
    },
    reduceQuantity: (state, action) => {
      
      if (
        state.cart.some(
          (product: Product) => product.title === action.payload.title
        )
      ) {
        state.cart.map((product, index) => {
          if (product.title === action.payload.title) {
            state.cart[index].quantity = state.cart[index].quantity - 1;
            state.total = Number(
              (state.total - action.payload.price).toFixed(2)
            );
          }
          return {
            ...state,
          };
        });
      } else {
        state.cart.push(action.payload);
      }
    },
  },
});

export const {
  addIntoCart,
  removeFromCart,
  reduceQuantity,
} = cartSlice.actions;
export const GET_CART = (state: RootState) => state.cart.cart;
export const GET_TOTAL = (state: RootState) => state.cart.total;

export default cartSlice.reducer;
