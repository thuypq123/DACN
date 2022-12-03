import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const getShopping = createAsyncThunk('shopping/getShopping',async(payload) => {
    const data = await fetch('http://localhost:3002/order',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({token:payload}),
    });
    const result = await data.json();
    console.log(result);
    return result;
});

export const shoppingSlice = createSlice({
    name: 'shopping',
    initialState: {
        Listshopping: [],
        status: 'idle',
        error: null
    },
    extraReducers: {
        [getShopping.pending]: (state, action) => {
            state.status = 'loading';
        },
        [getShopping.fulfilled]: (state, action) => {
            state.Listshopping = [];
            state.status = 'succeeded';
            console.log(state.Listshopping.concat(action.payload));
            state.Listshopping = state.Listshopping.concat(action.payload)
        },
        [getShopping.rejected]: (state, action) => {
            state.status = 'failed';
        }
    }
});

export default shoppingSlice.reducer;
export const Listshopping = state => state.shopping.Listshopping;