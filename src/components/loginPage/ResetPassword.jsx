import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Cookie from 'js-cookie';
import { Link } from 'react-router-dom';
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
                />
                <ThemeProvider theme={theme}>
                    <Button color = 'blackBtn' style={{margin:'20px auto', display:'block', marginRight:0}} variant="outlined">Gửi SMS</Button>
                    <Link to='/Register'><Button variant="text" style={{marginRight:20}}>Đăng ký</Button></Link>
                    <Link to='/'><Button variant="text">Đăng Nhập</Button></Link>
                </ThemeProvider>
            </>
        )
    }
}

export default ResetPassword