import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Profile from './editProfile';
import OrderList from './OrderList';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ProfilePage() {
  return (
    <Box style={{height:'100vh',paddingTop:'100px'}} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item >
            <Profile />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <OrderList/>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
