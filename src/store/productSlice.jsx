import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
  error: null, // Add an error state
};

// Define an asynchronous thunk action
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    if (!data.ok) {
      throw new Error("Failed to fetch products");
    }
    const result = await data.json();
    return result;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null; // Clear any previous error when the request is pending
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null; // Clear any previous error when the request is fulfilled
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = true;
        state.loading = false;
        state.error = action.error.message; // Set the error message
      });
  },
});

export default productSlice.reducer;
