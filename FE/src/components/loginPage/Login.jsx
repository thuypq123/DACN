import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie'
import { useDispatch, useSelector } from 'react-redux';
import {getLogin, selectAllLogin} from './loginSlice';
import store from '../../redux/store';
import swal from 'sweetalert';
const theme = createTheme({
    palette: {
        primary: {
            main: '#1A2027',
            contrastText: '#fff',
        },
        blackBtn: {
            main: '#000000',
            contrastText: '#fff',
            darker: '#053e85',
        },
}});

const Login = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const emailHandler = (e) => setEmail(e.target.value);
    const passwordHandler = (e) => setPassword(e.target.value);
    const submitHandler = async (e) => {
        if(email === '' || password === ''){
            swal({
                title: "Sai Thông Tin",
                text: "Nhập đầy đủ thông tin",
                icon: "error",
                dangerMode: true,
              })
            return;
        }
        else
        {
            if(!/([a-zA-Z0-9]+)([\_\.\-{1}])?([a-zA-Z0-9]+)\@([a-zA-Z0-9]+)([\.])([a-zA-Z\.]+)/g.test(email))
            {
                swal({
                    title: "Sai định dạng email",
                    text: "Bạn cần nhập đúng định dạng email ví dụ: abc@gmail.com",
                    icon: "warning",
                    dangerMode: true,
                    });
                return;
            }else{
                const data = {
                    email: email,
                    password: password,
                }
                await dispatch(getLogin(data));

                    if(Cookies.get('token')!=undefined){
                        window.location.href = '/products';
                    }else
                    {
                        if(store.getState().login.islogin.message!=""){
                            swal({
                                title: store.getState().login.islogin.message,
                                icon: "error",
                                dangerMode: true,
                            })
                        }
                        console.log(store.getState().login.islogin.message);
                    };
            }   
        }
    };

    if(Cookies.get('token')!=undefined){
        window.location.href = '/products';
    }else{
        return (
            <>
                <p style={{fontSize:40, margin:'0 auto', color:'grey'}}>Đăng Nhập</p>
                <TextField
                style={{marginTop:20}}
                    size="small"
                    fullWidth
                    id="outlined-user-input"
                    label="Email"
                    autoComplete="current-password"
                    onChange={emailHandler}
                />
                <TextField
                style={{marginTop:20}}
                    size="small"
                    fullWidth
                    id="outlined-password-input"
                    label="Mật Khẩu"
                    type="password"
                    autoComplete="current-password"
                    onChange={passwordHandler}
                />
                <ThemeProvider theme={theme}>
                    <Button onClick={submitHandler} color = 'blackBtn' style={{margin:'20px auto', display:'block', marginRight:0}} variant="outlined">Đăng Nhập</Button>
                    <Link to='/reset'><Button variant="text" style={{marginRight:20}}>Quên Mật Khẩu?</Button></Link>
                    <Link to='/Register'><Button variant="text">Đăng Ký</Button></Link>
                </ThemeProvider>
            </>
            )};
        }

export default Login;