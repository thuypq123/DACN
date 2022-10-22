import React from 'react'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import CardItem from './CardItem';
import Slider from '../../components/slide/Slide';
import Wrapper from '../../components/Wrapper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Product = () => {
  return (
    <>
      <Slider/>
      <h3 style={{fontSize:25, width:'80%', margin:'auto'}}>Sản Phẩm Nổi Bật</h3>
      <hr style={{color: "red", height: 50,  width:'80%', margin:'auto'}}></hr>
      <Wrapper>
        <Grid  xs={3} sm={3} md={4} item >
            <CardItem />
        </Grid>
        <Grid xs={3} sm={3} md={4} item>
            <CardItem />
        </Grid>
        <Grid xs={3} sm={3} md={4} item>
            <CardItem />
        </Grid>
      </Wrapper>
      <h3 style={{fontSize:25, width:'80%', margin:'auto'}}>Sản Phẩm Bán Chạy</h3>
      <hr style={{color: "red", height: 50,  width:'80%', margin:'auto'}}></hr>
      <Wrapper>
        <Grid  xs={3} sm={3} md={4} item >
            <CardItem />
        </Grid>
        <Grid xs={3} sm={3} md={4} item>
            <CardItem />
        </Grid>
        <Grid xs={3} sm={3} md={4} item>
            <CardItem />
        </Grid>
      </Wrapper>
    </>
  )
} 

export default Product