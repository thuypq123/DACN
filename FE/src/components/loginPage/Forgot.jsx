import React from 'react';
import { Typography, TextField  } from '@mui/material';

const Forgot = () => {
  return (
    <div style={{height:'100vh', display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
        <Typography sx={{ display: 'block' }} variant="h3" component="h2">
          Thay Đổi Mật Khẩu
        </Typography>
        <TextField id="filled-basic" label="Filled" variant="filled" />
    </div>
  )
}

export default Forgot