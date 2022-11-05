import React from 'react'
import Slider from '../slide/Slide'
import Wrapper from '../Wrapper'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ItemCheckout from './ItemCheckout';
import InfoCheckout from './InfoCheckout';
import {List } from '@mui/material';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCheckOut, selectAllCheckOut } from './checkOutSlice';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const CheckOut = () => {  
  const dispatch = useDispatch();
  const token = Cookies.get('token');
  if(!token){
    window.location.href = '/';
  }
  useEffect(() => {
    dispatch(getCheckOut(token));
  }, []);
  const productList = useSelector(selectAllCheckOut);
  // loi dong nay
  if(productList==undefined||productList.length==0){return};
  console.log(productList[0])
  return (
    <div>
        <Slider/>
        <h3 style={{ fontSize: 25, marginLeft: '10%' , display:'inline'}}>Thanh Toán đơn hàng</h3>
        <h3 style={{ fontSize: 25, marginLeft: '30%' , display:'inline'}}>Thông Tin Khách Hàng</h3>
        <hr style={{ color: "red", height: 50, width: '80%', margin: 'auto' }}></hr>
        <Wrapper>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
              <Item style={{background:'grey', margin:'0 0 20px 0'}}>
              <Paper style={{maxHeight: 500, overflow: 'auto'}}>
                <List style={{}}>
                  {productList[0].products.map((product) => <ItemCheckout id={product._id} price={product.price} quantity={product.quantity} img = {product.img} name = {product.name} des = {product.des}/>)}
                </List>
              </Paper>
              </Item>
              <p style={{fontSize:25, margin:'20px 0', display:'in'}}>Tổng cộng: {productList[0].total}$</p>
            </Grid>
            <Grid item xs={6} md={6}>
                <InfoCheckout/>
            </Grid>
          </Grid>
        </Box>
        </Wrapper>
    </div>
  )
}

export default CheckOut