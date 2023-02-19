import * as React from 'react';
import Stack from '@mui/material/Stack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function BasicButtons(props) {
  return (
    <Stack direction="row" sx={{ mt: 1, ml: 12}}>
      <AddShoppingCartIcon sx={{backgroundColor: 'green', color: 'white',  borderRadius: '2rem 0rem 0rem 2rem', width: 55, minHeight: 30}} onClick={()=> {props.updateItemQuantity(props.id, props.quantity + 1)}}/>
        <div style={{backgroundColor: 'blue', color: 'white', maxHeight: 30, padding: '0rem 10px', fontWeight: 'bold'}}>{props.quantity}</div>
      <DeleteForeverIcon sx={{backgroundColor: 'red', color: 'white',  borderRadius: '0rem 2rem 2rem 0rem', width: 55, minHeight: 30}} onClick={()=> {props.updateItemQuantity(props.id, props.quantity - 1)}}/>
    </Stack>
  );
}