import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Cookie from 'js-cookie';
import { Link } from 'react-router-dom';
import { useState } from 'react';
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

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(email);
        if(!/([a-zA-Z0-9]+)([\_\.\-{1}])?([a-zA-Z0-9]+)\@([a-zA-Z0-9]+)([\.])([a-zA-Z\.]+)/g.test(email))
        {
            swal({
                title: "Sai định dạng email",
                text: "Bạn cần nhập đúng định dạng email ví dụ: abc@gmail.com",
                icon: "warning",
                dangerMode: true,
                });
        }else{
            const respone = await fetch('http://localhost:3002/reset', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email: email}),
            });
            const data = await respone.json();
            if(data.status === true){
                swal({
                    title: "Thành công",
                    text: "Kiểm tra email để lấy lại mật khẩu",
                    icon: "success",
                    dangerMode: true,
                    });
            }else{
                swal({
                    title: "Thất bại",
                    text: "Email không tồn tại",
                    icon: "error",
                    dangerMode: true,
                });
            }
        }
    };
    if(Cookie.get('token') !== undefined){
        window.location.href = '/home';
    }
    else{
        return (
            <>
                <p style={{fontSize:40, margin:'0 auto', color:'grey'}}>Quên Mật Khẩu</p>
                <TextField
                style={{marginTop:20}}
                    size="small"
                    fullWidth
                    id="outlined-user-input"
                    label="Email"
                    autoComplete="current-password"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <ThemeProvider theme={theme}>
                    <Button onClick={handleSubmit} color = 'blackBtn' style={{margin:'20px auto', display:'block', marginRight:0}} variant="outlined">Xác Nhận</Button>
                    <Link to='/Register'><Button variant="text" style={{marginRight:20}}>Đăng ký</Button></Link>
                    <Link to='/'><Button variant="text">Đăng Nhập</Button></Link>
                </ThemeProvider>
            </>
        )
    }
}

export default ResetPassword