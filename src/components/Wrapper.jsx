import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Wrapper = ({children}) => {
  return (
    <div className='Wrapper'>
        <Box sx={{ flexGrow: 1, mx:'auto'}}>
            <Grid direction="row" container spacing={{ xs: 2, md: 3 }} columns={{xs: 4, sm: 8, md: 12}}>
                {children}
            </Grid>
        </Box>
    </div>
  )
}

export default Wrapper