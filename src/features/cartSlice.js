import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: [],
  wishListItems: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = {
        ...action.payload,
        quantity: action.payload.quantity,
      };
      
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.cartItems.push(newItem);
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity = Math.max(1, quantity);
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    addToWishList: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.wishListItems.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.wishListItems.push(newItem);
      } 
    },
    removeFromWishList: (state,action)=>{
      state.wishListItems=state.wishListItems.filter(
        (item)=>item.id!==action.payload
      );
    }
  },
});
export const { addToCart, updateQuantity, removeFromCart,  addToWishList , removeFromWishList} = cartSlice.actions;
export default cartSlice.reducer;



