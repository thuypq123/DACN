import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk('products/getProducts',
    async () => {
        const response = await fetch('http://localhost:3002/products');
        const data = await response.json();
        return data;
    }
)

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        Listproducts: [],
        status: 'idle',
        error: null
    },
    extraReducers: {
        [getProducts.pending]: (state, action) => {
            state.status = 'loading';
        },
        [getProducts.fulfilled]: (state, action) => {
            state.Listproducts = [];
            state.status = 'succeeded';
            state.Listproducts = state.Listproducts.concat(action.payload)
        },
        [getProducts.rejected]: (state, action) => {
            state.status = 'failed';
        }
    }
})
export default productsSlice.reducer;
export const selectAllProducts = state => state.products.Listproducts;