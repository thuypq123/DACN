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
import { red } from '@mui/material/colors';
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


const CardOrder = () => {
    return (
        <Grid style={{ margin: '20px', position:'relative'}} sx={{ boxShadow: 2 }} item xs={5}>
            <Card sx={{ display: 'flex' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 200 }}
                    image="https://jangin.vn/wp-content/uploads/2021/01/Robe-Studio_11.jpg"
                    alt="Live from space album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            Live From Space
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            Mac Miller
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        <TextField
                            style={{}}
                            id="outlined-number" 
                            label="Số Lượng"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(e) => {
                                if (e.target.value > 10) {
                                    e.target.value = 10
                                }
                                if (e.target.value < 1) {
                                    e.target.value = 1
                                }
                            }}
                        />
                        <ThemeProvider theme={theme}>
                            <Chip label='3000' style={{width:100, height:50, margin:'auto 10px'}}/>
                            <Button style={{position:'absolute', right:20, opacity:'0.5'}} color = 'deleteBtn' variant="contained"><DeleteForeverIcon sx={{height:30, width:50}}/></Button>
                        </ThemeProvider>
                    </Box>
                </Box>
            </Card>
        </Grid>
    )
}

export default CardOrder