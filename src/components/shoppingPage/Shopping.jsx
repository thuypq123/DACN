import * as React from 'react';
import { useEffect } from 'react';
import { Link} from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardOrder from './CardOrder';
import Slider from '../slide/Slide'
import {Typography} from '@mui/material';
import Wrapper from '../Wrapper';
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import {getShopping, Listshopping} from './shoppingSlice';
import { BubblyContainer, BubblyLink } from "react-bubbly-transitions";

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
    },
});

const Shopping = () => {
    const token = Cookies.get('token');
    if(!token){
        window.location.href = '/';
    }
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getShopping(token));
    }, []);
    const productList = useSelector(Listshopping);
    return (
        <>
            <Slider />
                <h3 style={{ fontSize: 25, width: '80%', margin: 'auto' }}>{productList.length>0?'Danh Sách Đơn Hàng':'Đơn Hàng Trống'}</h3>
                <hr style={{ color: "red", height: 50, width: '80%', margin: 'auto' }}></hr>
            <Wrapper>
                <Box style={{textAlign:'center'}} sx={{ flexGrow: 1 }}>
                    <Grid style={{textAlign:'center', justifyContent:'space-between'}} container spacing={2}>
                        {       
                            productList.length>0? productList.map((product) => <CardOrder id={product._id} price={product.price} quantity={product.quantity} img = {product.img} name = {product.name} des = {product.des}/>) : 
                            <Typography style={{fontSize:20, color:'grey', margin: 40}} variant="h3" component="h3">Đơn Hàng Trống</Typography>
                        }
                    </Grid>
                    {
                        productList.length>0? 
                        <ThemeProvider theme={theme}>
                            <Button onClick={()=>dispatch(getShopping(token))} style={{margin: '20px '}} color='neutral' variant="contained"><CheckIcon/>Lưu lại</Button>
                            <BubblyLink colorStart="black" to='/checkout'>
                                <Button style={{margin: '20px'}} color='checkOut' variant="contained"><ShoppingCartCheckoutIcon/>Thanh toán</Button>
                            </BubblyLink>
                        </ThemeProvider> : 
                        <ThemeProvider theme={theme}>
                            <BubblyLink colorStart="black" to='/products'>
                                <Button style={{margin: '20px'}} color='checkOut' variant="contained"><OtherHousesIcon/>Trang chủ</Button>
                            </BubblyLink>
                        </ThemeProvider>
                    }
                    
                </Box>
            </Wrapper>
        </>
    )
}

export default Shopping