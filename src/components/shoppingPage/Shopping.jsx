import * as React from 'react';
import { Link} from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardOrder from './CardOrder';
import Slider from '../slide/Slide'
import Wrapper from '../Wrapper';
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

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
    return (
        <>
            <Slider />
                <h3 style={{ fontSize: 25, width: '80%', margin: 'auto' }}>Danh Sách Đơn Hàng</h3>
                <hr style={{ color: "red", height: 50, width: '80%', margin: 'auto' }}></hr>
            <Wrapper>
                <Box style={{textAlign:'center'}} sx={{ flexGrow: 1 }}>
                    <Grid style={{textAlign:'center', justifyContent:'space-between'}} container spacing={2}>
                            <CardOrder/>
                            <CardOrder/>
                            <CardOrder/>
                            <CardOrder/>
                            <CardOrder/>
                            <CardOrder/>
                    </Grid>
                    <ThemeProvider theme={theme}>
                        <Button style={{margin: '20px '}} color='neutral' variant="contained"><CheckIcon/>Lưu lại</Button>
                        <Link to='/checkout'>
                            <Button style={{margin: '20px'}} color='checkOut' variant="contained"><ShoppingCartCheckoutIcon/>Thanh toán</Button>
                        </Link>
                    </ThemeProvider>
                </Box>
            </Wrapper>
        </>
    )
}

export default Shopping