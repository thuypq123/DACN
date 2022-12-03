import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const getCheckOut = createAsyncThunk('checkOut/getCheckOut',async(payload) => {
    const data = await fetch('http://localhost:3002/checkout',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({token:payload}),
    });
    const result = await data.json();
    return result;
});

export const postCheckoutInfo = createAsyncThunk('checkOut/postCheckoutInfo',async(payload) => {
    const data = await fetch('http://localhost:3002/checkout/postcheckoutinfo',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
    });
    const result = await data.json();
    return result;
});

export const checkOutSlice = createSlice({
    name: 'checkOut',
    initialState: {
        ListcheckOut: [],
        status: 'idle',
        error: null
    },
    extraReducers: {
        [getCheckOut.pending]: (state, action) => {
            state.status = 'loading';
        },
        [getCheckOut.fulfilled]: (state, action) => {
            state.ListcheckOut = [];
            state.status = 'succeeded';
            state.ListcheckOut = state.ListcheckOut.concat(action.payload)
        },
        [getCheckOut.rejected]: (state, action) => {
            state.status = 'failed';
        },
        [postCheckoutInfo.pending]: (state, action) => {
            state.status = 'loading';
        },
        [postCheckoutInfo.fulfilled]: (state, action) => {
            state.status = 'succeeded';
        },
        [postCheckoutInfo.rejected]: (state, action) => {
            state.status = 'failed';
        },
    }
});

export default checkOutSlice.reducer;
export const selectAllCheckOut = state => state.checkout.ListcheckOut;