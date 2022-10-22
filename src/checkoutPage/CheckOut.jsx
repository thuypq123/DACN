import React from 'react'
import Slider from '../components/slide/Slide'
import Wrapper from '../components/Wrapper'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ItemCheckout from './ItemCheckout';
import InfoCheckout from './InfoCheckout';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const CheckOut = () => {
  return (
    <div>
        <Slider/>
        <h3 style={{ fontSize: 25, marginLeft: '10%' , display:'inline'}}>Thanh Toán đơn hàng</h3>
        <h3 style={{ fontSize: 25, marginLeft: '30%' , display:'inline'}}>Thanh Toán đơn hàng</h3>
        <hr style={{ color: "red", height: 50, width: '80%', margin: 'auto' }}></hr>
        <Wrapper>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
              <Item style={{background:'grey', margin:'0 0 20px 0'}}>
                <ItemCheckout/>
                <ItemCheckout/>
                <ItemCheckout/>
              </Item>
              <p style={{fontSize:25, margin:'20px 0', display:'in'}}>Tổng cộng: 9000$</p>
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