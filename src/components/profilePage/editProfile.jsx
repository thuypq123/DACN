import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import swal from 'sweetalert';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState} from 'react';
import { fetchProfile,updateProfile } from './profileSlice';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const Profile = () => {
  const [fullname, setfullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [disabled, setDisabled] = useState(true);
  const token = Cookies.get('token');
  const dispatch = useDispatch();
  useEffect(async () => {
    await dispatch(fetchProfile(token));
  }, []);
  const profile = useSelector((state) => state.profile.profile);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = Cookies.get('token');
    const data = {
      token,
      fullname,
      email,
      phone,
      address,
    };
    if(fullname === '' || email === '' || phone === '' || address === ''){
      swal({
        title: 'Lỗi',
        text: 'Vui lòng nhập đầy đủ thông tin',
        icon: 'error',
        button: 'Đóng',
      })
    }else{
      if(!/([a-zA-Z0-9]+)([\_\.\-{1}])?([a-zA-Z0-9]+)\@([a-zA-Z0-9]+)([\.])([a-zA-Z\.]+)/g.test(email)){
        swal({
          title: 'Lỗi',
          text: 'Vui lòng nhập đúng định dạng email',
          icon: 'error',
          button: 'Đóng',
        })
      }else{
        if(!/([0-9]{10})/g.test(phone)){
          swal({
            title: 'Lỗi',
            text: 'Vui lòng nhập đúng định dạng số điện thoại',
            icon: 'error',
            button: 'Đóng',
          })}else{
            await dispatch(updateProfile(data));
            swal({
              title: 'Thành Công',
              text: 'Cập nhật thông tin thành công',
              icon: 'success',
              button: 'Đóng',
            });
            setDisabled(true);
            setTimeout(() => {
              window.location.reload();
            }, 3000);
          }
      }
    };
  };
  const handleResendEmail = async () => {
    const token = Cookies.get('token');
    const sendToken = await fetch('https://backenddacn.onrender.com/user/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Aplication': 'application/json',
      },
      body: JSON.stringify({ token }),
    });
    const data = await sendToken.json();
    if (data.status === 'success') {
      swal({
        title: 'Thành Công',
        text: 'Gửi lại mã xác thực thành công',
        icon: 'success',
        button: 'Đóng',
      });
    } else {
      swal({
        title: 'Lỗi',
        text: 'Gửi lại mã xác thực thất bại',
        icon: 'error',
        button: 'Đóng',
      });
    }
    console.log(data);
  }
  if(profile)
  return (
    <div>
      <div style={{backgroundColor:'rgba(0, 0, 0, 0.8)', height:'200px', margin:'50px', position: 'relative',display: 'flex',justifyContent: 'center'}}>
      <Stack direction="row" spacing={2}>
        <Avatar style={{position:'absolute', bottom:'-50px', right:'42%'}} sx={{ width: 200, height: 200 }} alt="Remy Sharp" src={profile.avatar||'https://khoinguonsangtao.vn/wp-content/uploads/2022/07/avatar-cute-2.jpg'} />
      </Stack>
      </div>
      <div>
        <h1 style={{textAlign:'center', fontSize:'30px'}}>{profile.fullname}</h1>
        <h1 style={{textAlign:'center', fontSize:'20px'}}>{profile.email}</h1>
        {profile.verify?<Chip style={{margin:'10px'}} variant="outlined" label={'Đã Xác Nhận'} color={'primary'}/>:
        <Chip style={{margin:'10px'}} icon={<RestartAltIcon />} onClick={handleResendEmail} variant="outlined" label={'Chưa Xác Nhận'} color={'error'}/>
        }
      </div>
      <hr style={{color: "red", height: 50,  width:'80%', margin:'auto'}}></hr>
      <h1 style={{ fontSize:'30px', margin:'20px'}}>Thông tin cá nhân</h1>
      <div>
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
              {/* <TextField style={{width:'70%', margin:'20px'}} size="small" id="outlined-basic" label="Họ tên" variant="outlined" defaultValue={profile.fullname}/> */}
              <label for="inp" class="inp"><input onChange={(e)=>{setfullname(e.target.value); setDisabled(false)}} style={{width:'70%', margin:'10px'}} type="text" id="inp" placeholder="&nbsp;"/><span class="label">{profile.fullname||'Họ và tên'}</span><span class="focus-bg"></span></label>
            </Grid>
            <Grid item xs={6} md={6}>
              <label for="inp" class="inp"><input onChange={(e)=>{setEmail(e.target.value); setDisabled(false)}} style={{width:'70%', margin:'10px'}} type="text" id="inp" placeholder="&nbsp;"/><span class="label">{profile.email}</span><span class="focus-bg"></span></label>
            </Grid>
            <Grid item xs={6} md={6}>
              <label for="inp" class="inp"><input onChange={(e)=>{setPhone(e.target.value); setDisabled(false)}} style={{width:'70%', margin:'10px'}} type="text" id="inp" placeholder="&nbsp;"/><span class="label">{profile.phone==""?"Số Điện Thoại":profile.phone}</span><span class="focus-bg"></span></label>
            </Grid>
            <Grid item xs={6} md={6}>
              <label for="inp" class="inp"><input onChange={(e)=>{setAddress(e.target.value); setDisabled(false)}} style={{width:'70%', margin:'10px'}} type="text" id="inp" placeholder="&nbsp;"/><span class="label">{profile.address==""?"Địa chỉ":profile.address}</span><span class="focus-bg"></span></label>
            </Grid>
            <Grid item xs={6} md={6}>
              <label for="inp" class="inp"><input disabled style={{width:'70%', margin:'10px'}} type="text" id="inp" placeholder="&nbsp;"/><span class="label">{profile.created_at }</span><span class="focus-bg"></span></label>
            </Grid>
            <Grid item xs={6} md={6}>
              <Button disabled={disabled} size='large' onClick={handleSubmit} style={{width:'70%', margin:'20px'}} variant="contained" disableElevation> Lưu Thông Tin </Button>
            </Grid>
            </Grid>
        </Box>

      </div>
    </div>
  )
}

export default Profile