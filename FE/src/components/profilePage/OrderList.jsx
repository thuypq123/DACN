import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ItemCheckout from '../checkoutPage/ItemCheckout';
import { getOdersProfile } from './profileSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

export default function OrderList() {
  const [expanded, setExpanded] = React.useState(false);
  const dispatch = useDispatch();
  useEffect(async () => {
    await dispatch(getOdersProfile(Cookies.get('token')));
  }, []);
  const orders = useSelector((state) => state.profile.orders);
  console.log(orders);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {orders.map((order, index) => {
        console.log(index);
        return <Accordion expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              Đơn Hàng # {index + 1}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>Tổng cộng {order.total} $</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{textAlign:'center', fontSize:20}}>
              Thông Tin Đơn Hàng
            </Typography>
            <div>
              <Typography sx={{ color: 'text.secondary', display:'inline' }}>Người Nhận:  {order.receiver_name} </Typography>
              <Typography sx={{ color: 'text.secondary', display:'inline-block', position:'absolute', right:0 }}>email:  {order.order_email} </Typography>
            </div>
            <div>
              <Typography sx={{ color: 'text.secondary', display:'inline'}}>Số Điện Thoại:  {order.order_phone} </Typography>
              <Typography sx={{ color: 'text.secondary', display:'inline', position:'absolute', right:0 }}>Địa Chỉ:  {order.shipping_address} </Typography>
            </div>
            {order.products.map((product) => {
              return <ItemCheckout id={product._id} price={product.price} quantity={product.quantity} img = {product.img} name = {product.name} des = {product.des}/>;
            })}
          </AccordionDetails>
        </Accordion>
      })}
    </div>
  );
}