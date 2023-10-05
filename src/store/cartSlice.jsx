import { createSlice } from "@reduxjs/toolkit";

// Define a function to load cart data from local storage
const loadCartFromLocalStorage = () => {
  const cartData = localStorage.getItem("cart");
  return cartData ? JSON.parse(cartData) : [];
};

const initialState = loadCartFromLocalStorage();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.push(action.payload);
      // Save the updated cart to local storage
      localStorage.setItem("cart", JSON.stringify(state));
    },

    removeItem(state, action) {
      // Filter out the item to remove
      const updatedCart = state.filter((item) => item.id !== action.payload);
      // Save the updated cart to local storage
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
