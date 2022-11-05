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
import { BubblyContainer, BubblyLink } from "react-bubbly-transitions";

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

export default function CardItem({id, des , img, name}) {
  return (
    <Card style={{transition: '1s, transform .3s', height:500}} className='CardItem' sx={{ maxWidth: "80%"}}>
      <CardMedia
        sx={{ height: 300 }}
        component="img"
        height="140"
        image={img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {des.length > 100 ? des.slice(0,100) + '...' : des}
        </Typography>
      </CardContent>
      <ThemeProvider theme={theme}>
        <CardActions>
          <BubblyLink colorStart="black" to={'/detail/'+id}><Button color='checkOut' variant="contained"><RemoveRedEyeIcon style={{margin:'0px 5px'}}/>Xem</Button></BubblyLink>
        </CardActions>
      </ThemeProvider>
    </Card>
  );
}
