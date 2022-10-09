import React from 'react'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import CardItem from './CardItem';

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
      <Grid  xs={3} sm={3} md={4} item >
          <CardItem />
      </Grid>
      <Grid xs={3} sm={3} md={4} item>
          <CardItem />
      </Grid>
      <Grid xs={3} sm={3} md={4} item>
          <CardItem />
      </Grid>
    </>
  )
} 

export default Product