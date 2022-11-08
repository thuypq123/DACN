import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import { red, green } from '@mui/material/colors';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState} from 'react';
import { fetchProfile } from './profileSlice';
import {CardMedia} from '@mui/material';
const colorRed = red[500];

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const token = Cookies.get('token');
  const dispatch = useDispatch();
  useEffect(async () => {
    await dispatch(fetchProfile(token));
  }, []);
  const profile = useSelector((state) => state.profile.profile);
  if(profile)
  return (
    <div>
      <div style={{backgroundColor:'rgba(0, 0, 0, 0.8)', height:'200px', margin:'50px', position: 'relative',display: 'flex',justifyContent: 'center'}}>
      <Stack direction="row" spacing={2}>
        <Avatar style={{position:'absolute', bottom:'-50px', right:'42%'}} sx={{ width: 200, height: 200 }} alt="Remy Sharp" src={profile.img||'https://khoinguonsangtao.vn/wp-content/uploads/2022/07/avatar-cute-2.jpg'} />
      </Stack>
      </div>
      <div>
        <h1 style={{textAlign:'center', fontSize:'30px'}}>{profile.fullname}</h1>
        <h1 style={{textAlign:'center', fontSize:'20px'}}>{profile.email}</h1>
        <Chip style={{margin:'10px'}} variant="outlined" label="chưa xác thực"  color='error'/>
      </div>
      <hr style={{color: "red", height: 50,  width:'80%', margin:'auto'}}></hr>
      <h1 style={{ fontSize:'30px', margin:'20px'}}>Thông tin cá nhân</h1>
      <div>
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
              {/* <TextField style={{width:'70%', margin:'20px'}} size="small" id="outlined-basic" label="Họ tên" variant="outlined" defaultValue={profile.fullname}/> */}
              <label for="inp" class="inp"><input style={{width:'70%', margin:'10px'}} type="text" id="inp" placeholder="&nbsp;"/><span class="label">{profile.fullname}</span><span class="focus-bg"></span></label>
            </Grid>
            <Grid item xs={6} md={6}>
              <label for="inp" class="inp"><input style={{width:'70%', margin:'10px'}} type="text" id="inp" placeholder="&nbsp;"/><span class="label">{profile.email}</span><span class="focus-bg"></span></label>
            </Grid>
            <Grid item xs={6} md={6}>
              <label for="inp" class="inp"><input style={{width:'70%', margin:'10px'}} type="text" id="inp" placeholder="&nbsp;"/><span class="label">{profile.phone==""?"Số Điện Thoại":profile.phone}</span><span class="focus-bg"></span></label>
            </Grid>
            <Grid item xs={6} md={6}>
              <label for="inp" class="inp"><input style={{width:'70%', margin:'10px'}} type="text" id="inp" placeholder="&nbsp;"/><span class="label">{profile.address==""?"Địa chỉ":profile.address}</span><span class="focus-bg"></span></label>
            </Grid>
            <Grid item xs={6} md={6}>
              <label for="inp" class="inp"><input disabled style={{width:'70%', margin:'10px'}} type="text" id="inp" placeholder="&nbsp;"/><span class="label">{profile.created_at }</span><span class="focus-bg"></span></label>
            </Grid>
            <Grid item xs={6} md={6}>
            <Button size='large' style={{width:'70%', margin:'20px'}} variant="contained" disableElevation> Lưu Thông Tin </Button>
            </Grid>
            </Grid>
        </Box>

      </div>
    </div>
  )
}

export default Profile