import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getDetail = createAsyncThunk('detail/getDetail',async (id) => {
    const response = await fetch(`http://localhost:3002/detail/${id}`);
    const data = await response.json();
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
            console.log(state.detail);
        },
    }
});
export default detailSlice.reducer;
export const selectDetail = state => state.detail.detail;