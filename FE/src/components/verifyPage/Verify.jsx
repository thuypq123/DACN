import React from 'react'
import Player from "react-lottie-player";
import Success from './Success';
import Wrong from './Wrong';
import Loadding from './Loadding';
import {getVerifyEmail} from './verifyEmailSlice';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import {useEffect} from 'react';
import { Store } from '@mui/icons-material';


const Verify = () => {
    const search = useLocation().search;
    const token = new URLSearchParams(search).get("token");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getVerifyEmail(token));
    },[]);
    const verify = useSelector(state => state.verifyEmail.isVerifyEmail.status);
    console.log(verify);
  return (
    <div style={{ height:'100vh', background:'#141414',  display: 'flex',alignItems: 'center',justifyContent: 'center',height: '100vh',}}>
        {verify==''?<Loadding/>:verify=="access"?<Success/>:<Wrong/>}
    </div>
  )
}

export default Verify