import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const getVerifyEmail = createAsyncThunk('verifyEmail/getVerifyEmail',async (payload) => {
    const response = await fetch('http://localhost:3002/verify?token='+payload,{
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
    const data = await response.json();
    console.log(data);
    return data;
});

export const verifyEmailSlice = createSlice({
    name: 'verifyEmail',
    initialState: {
        isVerifyEmail: {
            status: '',
        },
    },
    extraReducers: {
        [getVerifyEmail.fulfilled]: (state, action) => {
            state.isVerifyEmail.status = action.payload.status;
        },
        // [getVerifyEmail.rejected]: (state, action) => {
        //     state.isVerifyEmail.status = action.payload.status;
        // },
        // [getVerifyEmail.pending]: (state, action) => {
        //     state.isVerifyEmail.status = action.payload.status;
        // },
    },
});

export default verifyEmailSlice.reducer;
export const selectAllVerifyEmail = state => state.verifyEmail.VerifyEmail;