import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchProfile = createAsyncThunk('profile/fetchProfile', async (payload) => {
    const response = await fetch(`http://localhost:3002/profile`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({token:payload})
    });
    const data = await response.json();
    return data;
});
export const updateProfile = createAsyncThunk('profile/updateProfile', async (payload) => {
    const response = await fetch(`http://localhost:3002/profile/updateprofile`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    const data = await response.json();
    return data;
});
export const getOdersProfile = createAsyncThunk('profile/getOdersProfile', async (payload) => {
    const response = await fetch(`http://localhost:3002/profile/getOrdersProfile`,{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({token:payload})
    });
    const data = await response.json();
    return data;
});
const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        profile: {},
        orders: [],
        status: 'idle',
        error: null
    },
    extraReducers: {
        [fetchProfile.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchProfile.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.profile = action.payload;
        },
        [fetchProfile.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },
        [updateProfile.pending]: (state, action) => {
            state.status = 'loading';
        },
        [updateProfile.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.profile = action.payload;
            console.log(action.payload);
        },
        [updateProfile.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },
        [getOdersProfile.pending]: (state, action) => {
            state.status = 'loading';
        },
        [getOdersProfile.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.orders = action.payload;
        },
        [getOdersProfile.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        }
    },
});

export default profileSlice.reducer;
export const selectProfile = state => state.profile.profile;