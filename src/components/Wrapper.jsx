import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import WebFont from 'webfontloader'

const Wrapper = ({children}) => {
  return (
    <div className='Wrapper'>
      <h3 style={{fontSize:25}}>Sản Phẩm Nổi Bật</h3>
      <hr style={{color: "red", height: 50}}></hr>
        <Box sx={{ flexGrow: 1, mx:'auto'}}>
            <Grid direction="row" container spacing={{ xs: 2, md: 3 }} columns={{xs: 4, sm: 8, md: 12}}>
                {children}
            </Grid>
        </Box>
      <h3 style={{fontSize:25}}>Sản Phẩm Bán Chạy</h3>
      <hr style={{color: "red", height: 50}}></hr>
        <Box sx={{ flexGrow: 1 }}>
            <Grid direction="row" container spacing={2}>
                {children}
            </Grid>
        </Box>
    </div>
  )
}

export default Wrapper