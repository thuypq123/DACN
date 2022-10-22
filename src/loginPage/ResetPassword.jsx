import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
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
                <Link to='/user/reset'><Button variant="text" style={{marginRight:20}}>Quên Mật Khẩu?</Button></Link>
                <Link to='/user/Register'><Button variant="text">Đăng Ký</Button></Link>
            </ThemeProvider>
        </>
    )
}

export default ResetPassword