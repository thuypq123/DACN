import React from 'react'
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import swal from 'sweetalert';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie'
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
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderColor: 'red',
  };

const Register = () => {
    const [email, setEmail] = useState('');
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const emailHandler = (e) => setEmail(e.target.value);
    const userHandler = (e) => setUser(e.target.value);;
    const passwordHandler = (e) => setPassword(e.target.value);
    const submitHandler = async (e) => {
        if(email === '' || user === '' || password === ''){
            swal({
                title: "Sai Thông Tin",
                text: "Nhập đầy đủ thông tin",
                icon: "error",
                dangerMode: true,
              })
            return;
        }else{
            if(!/([a-zA-Z0-9]+)([\_\.\-{1}])?([a-zA-Z0-9]+)\@([a-zA-Z0-9]+)([\.])([a-zA-Z\.]+)/g.test(email)){
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
                    username: user,
                    password: password,
                }
                const res = await fetch('http://localhost:3002/user/Register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
                const result = await res.json();
                if(result.status){
                    swal("Thành công!", "Kiểm tra Gmail để xác nhận tại khoản!", "success");
                    setTimeout(() => {window.location.href = '/'}, 1000);
                }else{
                    swal({
                        title: "Email đã tồn tại",
                        text: "Bạn hãy nhập email khác",
                        icon: "warning",
                        dangerMode: true,
                      });
                }
            }

        }
    };
    if(Cookies.get('token')!=undefined){
        window.location.href = '/products';
    }else{
    return (
            <>
                <p style={{fontSize:40, margin:'0 auto', color:'grey'}}>Đăng Ký</p>
                <TextField
                style={{marginTop:20}}
                    size="small"
                    fullWidth
                    id="outlined-email-input"
                    label="Email"
                    autoComplete="current-password"
                    onChange={emailHandler}
                />
                <TextField
                    style={{marginTop:20}}
                    size="small"
                    fullWidth
                    id="outlined-user-input"
                    label="Tài Khoản"
                    autoComplete="current-password"
                    onChange={userHandler}
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
                    <Button color = 'blackBtn' style={{margin:'20px auto', display:'block', marginRight:0}} variant="outlined" onClick={submitHandler}>Đăng Ký</Button>
                    <Link to='/reset'><Button variant="text" style={{marginRight:20}}>Quên Mật Khẩu?</Button></Link>
                    <Link to='/'><Button variant="text">Đăng Nhập</Button></Link>
                </ThemeProvider>
            </>
        )
    }
}

export default Register