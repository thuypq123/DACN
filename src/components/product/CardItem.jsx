import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import {Link} from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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

export default function CardItem() {
  return (
    <Card style={{transition: '1s, transform .3s'}} className='CardItem' sx={{ maxWidth: "80%"}}>
      <CardMedia
        component="img"
        height="140"
        image="https://jangin.vn/wp-content/uploads/2021/01/Robe-Studio_11.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <ThemeProvider theme={theme}>
        <CardActions>
          <Link to='/detail/1'><Button color='checkOut' variant="contained"><RemoveRedEyeIcon style={{margin:'0px 5px'}}/>Xem</Button></Link>
        </CardActions>
      </ThemeProvider>
    </Card>
  );
}
