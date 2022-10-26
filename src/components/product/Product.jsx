import React from 'react'
import Grid from '@mui/material/Grid';
import { useState, useEffect } from "react";
import CardItem from './CardItem';
import Slider from '../../components/slide/Slide';
import Wrapper from '../../components/Wrapper';
import {getProducts, selectAllProducts} from './productsSlice';
import { useSelector, useDispatch } from "react-redux";


const Product = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  },[]);
  const allProducts = useSelector(selectAllProducts);
  console.log(allProducts);
  return (
    <>
      <Slider/>
      <h3 style={{fontSize:25, width:'80%', margin:'auto'}}>Sản Phẩm Nổi Bật</h3>
      <hr style={{color: "red", height: 50,  width:'80%', margin:'auto'}}></hr>
      <Wrapper>
        {/* <Grid  xs={3} sm={3} md={4} item >
            <CardItem />
        </Grid> */}
        {allProducts.map((product) => {
          return <Grid key = {product.id}  xs={3} sm={3} md={4} item >
                  <CardItem id={product.id} des = {product.des} img={product.img} name={product.name}  />
                </Grid>
        })}
      </Wrapper>
      <h3 style={{fontSize:25, width:'80%', margin:'auto'}}>Sản Phẩm Bán Chạy</h3>
      <hr style={{color: "red", height: 50,  width:'80%', margin:'auto'}}></hr>
      <Wrapper>
      {allProducts.map((product) => {
          return <Grid key = {product.id}  xs={3} sm={3} md={4} item >
                  <CardItem id={product.id} des = {product.des} img={product.img} name={product.name}  />
                </Grid>
        })}
      </Wrapper>
    </>
  )
} 

export default Product