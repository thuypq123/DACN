import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';

export default function ItemCheckout() {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar style={{width:100, height:100}} alt="Cindy Baker" src="https://jangin.vn/wp-content/uploads/2022/05/b%E1%BB%99-sevan-web-2-1900x840.jpg" />
        </ListItemAvatar>
        <ListItemText
          style={{margin:'auto 10px'}}
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              {' Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        /><Chip label="30000$" />
      </ListItem>
    </List>
  );
}
