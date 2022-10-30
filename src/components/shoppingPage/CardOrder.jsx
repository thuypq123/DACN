import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import debounce from 'lodash.debounce'
import { useState, useCallback } from 'react';
import Cookies from 'js-cookie';
import { red } from '@mui/material/colors';
import swal from 'sweetalert';
const color = red[500];
const theme = createTheme({
    palette: {
      neutral: {
        main: '#4c4c4c',
        contrastText: '#fff',
      },
      checkOut:{
        main: '#1A2027',
        contrastText: '#fff',
      },
      deleteBtn:{
        main: '#1A2027',
        contrastText: '#fff',
      }
    },
});


const CardOrder = ({id, img, name, des, quantity, price}) => {
    const [count, setCount] = useState(quantity);
    const [deleteItem, setDeleteItem] = useState(false);
    const handleChange = debounce(async(e) => {
        if(e.target.value < 1){
            swal({
                title: "Số lượng phải lớn hơn 0",
                icon: "warning",
                button: "OK",
              });
            return;
        }
        const token = Cookies.get('token');
        const res = await fetch('http://localhost:3002/order/editCard', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({token: token, quantity: e.target.value, product_id: id})
        });
        const data = await res.json();
        if(data.status){
            swal({
                title: "Thành Công",
                text: "Số lượng đã được thay đổi",
                icon: "success",
            });
        }
        console.log(data);
    }, 500);
    const debouceRequest = useCallback(value => handleChange(value), []);
    const onChange = e => {
        setCount(e.target.value);
        debouceRequest(e);
    };

    const handleDelete = async() => {
        const token = Cookies.get('token');
        const res = await fetch('http://localhost:3002/order/deleteCard', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({token: token, product_id: id})
        });
        const data = await res.json();
        if(data.status){
            swal({
                title: "Thành Công",
                text: "Sản phẩm đã được xóa",
                icon: "success",
            });
            setDeleteItem(true);
        }
    };
    return (
        <Grid style={{ margin: '20px', position:'relative', display:deleteItem==true?'none':'block'}} sx={{ boxShadow: 2 }} item xs={5}>
            <Card sx={{ display: 'flex' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 200 }}
                    image={img}
                    alt="Live from space album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            {name}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {des.length<30?des:des.slice(0,30)+'...'}
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        <TextField
                            style={{}}
                            id="outlined-number" 
                            label="Số Lượng"
                            type="number"
                            value={count}
                            onChange={onChange}
                        />
                        <ThemeProvider theme={theme}>
                            <Chip label={price} style={{width:100, height:50, margin:'auto 10px'}}/>
                            <Button onClick={handleDelete} style={{position:'absolute', right:20, opacity:'0.5'}} color = 'deleteBtn' variant="contained"><DeleteForeverIcon sx={{height:30, width:50}}/></Button>
                        </ThemeProvider>
                    </Box>
                </Box>
            </Card>
        </Grid>
    )
}

export default CardOrder