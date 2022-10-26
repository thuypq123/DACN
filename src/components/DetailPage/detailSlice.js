import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getDetail = createAsyncThunk('detail/getDetail',async (id) => {
    const response = await fetch(`https://63533284d0bca53a8ebb9480.mockapi.io/Products/products/${id}`);
    const data = await response.json();
    console.log(id);
    return data;
});

export const detailSlice = createSlice({
    name: 'detail',
    initialState: {
        detail: [],
    },
    extraReducers: {
        [getDetail.fulfilled]: (state, action) => {
            state.detail = action.payload;
        }
    }
});
export default detailSlice.reducer;
export const selectDetail = state => state.detail.detail;