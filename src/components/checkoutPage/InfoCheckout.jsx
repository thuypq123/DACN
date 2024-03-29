import React from 'react'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from '@mui/material/Button';
import Cookies from 'js-cookie';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {postCheckoutInfo} from './checkOutSlice'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import PaidIcon from '@mui/icons-material/Paid';
import store from '../../redux/store';

const theme = createTheme({
  palette: {
    neutral: {
      main: '#4c4c4c',
      contrastText: '#fff',
    },
    checkOut:{
      main: '#1A2027',
      contrastText: '#fff',
    },
    deleteBtn:{
      main: '#1A2027',
      contrastText: '#fff',
    }
  },
});

const InfoCheckout = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [order_date, setOrder_date] = useState('');
  const [receiver, setReceiver] = useState('');
  const [payment, setPayment] = useState('');
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const handleToggle = (e) => {
    setPayment(e.target.value);
    setToggle(!toggle);
  }

  const handlePayment = async (event) => {
    const productCheckOut = store.getState().checkout.ListcheckOut[0].products;
    const token = Cookies.get('token');
    const urlCheckOut = await fetch('https://backenddacn.onrender.com/stripe/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({token: token, products: productCheckOut})
    });
    const data = await urlCheckOut.json();
    window.location.href = data.url;
    console.log(data);
  };
  const handleSubmit = (e) => {
    const token = Cookies.get('token');
    const order = { fullname, email, phone, address, order_date, receiver, payment, token };
    if(fullname==''||email==''||phone==''||address==''||order_date==''||receiver==''||payment==''){
      swal({
        title: "Thông tin không được để trống",
        icon: "warning",
        button: "OK",
      })
    }else{
      if(email.indexOf('@')==-1){
        swal({
          title: "Email không hợp lệ",
          icon: "warning",
          button: "OK",
        })
    }else{
      if(phone.length<10){
        swal({
          title: "Số điện thoại không hợp lệ",
          icon: "warning",
          button: "OK",
        })
      }else{
        dispatch(postCheckoutInfo(order));
        swal({
          title: "Đặt hàng thành công",
          icon: "success",
          button: "OK",
        });
        setTimeout(() => {
          window.location.href = '/';
        }, 2000);
      }
    }
  }
}
  return (
    <>
    <Box style={{marginLeft:'5%', position:'relative', display:toggle?'':'none'}} sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
        <Grid item xs={4}>
            <TextField onChange={(e)=>{setFullname(e.target.value)}} fullWidth size="small" label={'Họ và Tên'} id="margin-normal" />
        </Grid>
        <Grid item xs={4}>
            <TextField onChange={(e)=>{setEmail(e.target.value)}} fullWidth size="small" label={'Gmail'} id="margin-normal" />
        </Grid>
        <Grid item xs={4}>
            <TextField onChange={(e)=>{setPhone(e.target.value)}} fullWidth size="small" label={'Số Điện Thoại'} id="margin-normal" />
        </Grid>
      </Grid>
      <Grid style={{margin:'20px -10px'}} container spacing={1}>
        <Grid item xs={6}>
            <TextField onChange={(e)=>{setReceiver(e.target.value)}} fullWidth  size="small" label={'Họ và Tên Người Nhận'} id="margin-normal" />
        </Grid>
        <Grid item xs={6}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TextField onChange={(e)=>{setOrder_date(e.target.value)}} size="small" id="date" label="Ngày Giao" type="date" fullWidth InputLabelProps={{shrink: true,}}/>
        </LocalizationProvider>
        </Grid>
      </Grid>
      <TextField onChange={(e)=>{setAddress(e.target.value)}} style={{marginTop:10}} fullWidth size="small" label={'Địa chỉ'} id="margin-normal" />
      {/* Phuong thuc thanh toan */}
      <FormControl>
      <FormLabel onClick={(e)=>{console.log(e.target.value)}} style={{fontSize:20, marginTop:10, marginBottom:20}} id="demo-form-control-label-placement">Phương thức thanh toán</FormLabel>
    </FormControl>
    </Box>
    <ThemeProvider theme={theme}>
    <RadioGroup
        row
        aria-labelledby="demo-form-control-label-placement"
        name="position"
        defaultValue="top"
        style={{marginLeft:'5%', marginTop:10}}
      >
        <FormControlLabel
          className='radio'
          value="MOMO"
          control={<Radio />}
          label={<img style={{width:75, height:75}} src="https://cdn.iconscout.com/icon/free/png-256/stripe-2-498440.png" alt="Option 1"></img>}
          labelPlacement="top"
          onChange={handlePayment}
        />
        <FormControlLabel
          className='radio'
          value="COD"
          control={<Radio />}
          label={<img style={{width:75, height:75}} src="https://cdn-icons-png.flaticon.com/512/69/69881.png" alt="Option 1"></img>}
          labelPlacement="top"
          onChange={handleToggle}
        />
      </RadioGroup>
      <Button onClick={handleSubmit} color='checkOut'  style={{marginLeft:'80%', display:toggle?'':'none'}} variant="contained"><PaidIcon/>Thanh Toán</Button>
    </ThemeProvider>
    </>
  )
}

export default InfoCheckout