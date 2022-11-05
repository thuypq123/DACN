import React from 'react'
import Slider from '../slide/Slide';
import Wrapper from '../Wrapper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import Login from './Login';
import { Link, Route, Routes,Outlet  } from 'react-router-dom';
import Register from './Register';
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

const ActionPage = () => {
    return (
        <>
            <Slider />
            <Wrapper>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={0}>
                        <Grid item xs={8} md={8}>
                        <CardMedia
                            className='CardItem'
                            style={{transition: '1s, transform .3s'}}zz
                            component="img"
                            sx={{padding:10, width: '100vh'}}
                            image="https://jangin.vn/wp-content/uploads/2021/01/Robe-Studio_11.jpg"
                            alt="Live from space album cover"
                        />
                        </Grid>
                            <Grid style={{ height:'60vh', marginTop:75}}  item xs={4} md={4}>
                                    <Outlet/>
                            </Grid>
                    </Grid>
                </Box>
            </Wrapper>
        </>
    )
}

export default ActionPage