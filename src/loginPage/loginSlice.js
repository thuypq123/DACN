import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from 'js-cookie'

export const getLogin = createAsyncThunk('login/getLogin',async (payload) => {
    const response = await fetch('http://localhost:3002/user/login',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
          redirect: 'follow', 
          referrerPolicy: 'no-referrer', 
          body: JSON.stringify(payload),
    });
    const data = await response.json();
    return data;
});

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        islogin: {
            status: false,
            token: '',
            message: '',
        },
    },
    reducers: {
        setLoginIsempty: (state, action) => {
            state.islogin.message = '';
        }
    },
    extraReducers: {
        [getLogin.fulfilled]: (state, action) => {
            state.islogin.status = action.payload.status;
            state.islogin.token = action.payload.token;
            state.islogin.message = action.payload.message;
            if(state.islogin.status === true){
                Cookies.set('token', state.islogin.token);
            }
        }
    }
});

export default loginSlice.reducer;
export const selectAllLogin = state => state.login.islogin;