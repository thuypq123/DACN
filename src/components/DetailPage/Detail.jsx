import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia'
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Rating from '@mui/material/Rating';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';


import Wrapper from "../../components/Wrapper";
import Slider from "../../components/slide/Slide";
import React from "react";

const theme = createTheme({
    palette: {
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },
      blackTheme:{
        main: '#000',
        contrastText: '#fff',
      }
    },
});

const color = grey[900];
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Detail = () => {
    return (
        <>
            <Slider />
            <h3 style={{fontSize:25, width:'80%', margin:'auto'}}>Thông Tin Sản Phẩm</h3>
            <hr style={{color: "red", height: 50,  width:'80%', margin:'auto'}}></hr>
            <div className="Detail">
                <Wrapper>
                    <Box sx={{ width: "100%" }}>
                        <Grid
                            container
                            rowSpacing={1}
                            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                        >
                            <Grid item xs={6}>
                                <Card style={{transition: '1s, transform .3s', margin:'30px'}} className='CardItem' sx={{ maxWidth: "80%"}}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="https://jangin.vn/wp-content/uploads/2021/01/Robe-Studio_11.jpg"
                                        alt="green iguana"
                                    />
                                </Card>
                            </Grid>
                            <Grid style={{position:'relative'}} item xs={6}>
                                <ThemeProvider theme={theme}>
                                    <Item style={{fontSize:'25px',background:'black', color:'white', margin:'5px'}}>Ghế Ăn và Bàn Ngủ</Item>
                                    <Rating value={4} style={{fontSize:'2rem'}}/>
                                        <Typography style={{color:'grey', fontSize:'25px'}} variant="subtitle2" gutterBottom>
                                            Mô tả sản phẩm
                                        </Typography>
                                        <Typography style={{color:'grey'}} variant="body1" gutterBottom>
                                            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                            quasi quidem quibusdam.
                                        </Typography>
                                        <Typography style={{color:'grey', fontSize:'25px'}} variant="subtitle2" gutterBottom>
                                            Công dụng chính
                                        </Typography>
                                        <Typography style={{color:'grey'}} variant="body1" gutterBottom>
                                            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                            quasi quidem quibusdam.
                                        </Typography>
                                    <Chip style={{position: 'absolute',bottom: '30px', height:'50px', width:'200px', fontSize:'1rem', left: '10px'}} label="3000$" variant="outlined" />
                                    <Button color="blackTheme" style={{position: 'absolute',bottom: '30px', right: '10px',height:'50px', width:'200px'}} variant="contained"><AddShoppingCartIcon/></Button>
                                </ThemeProvider>
                            </Grid>
                        </Grid>
                    </Box>
                </Wrapper>
            </div>
        </>
    );
};

export default Detail;
