import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk('products/getProducts',
    async () => {
        const response = await fetch('https://63533284d0bca53a8ebb9480.mockapi.io/Products/products');
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
            state.Listproducts = state.Listproducts.concat(action.payload).slice(1,7);// change this to 6 to get 6 products only    
        },
        [getProducts.rejected]: (state, action) => {
            state.status = 'failed';
        }
    }
})
export default productsSlice.reducer;
export const selectAllProducts = state => state.products.Listproducts;