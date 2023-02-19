import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useCart } from 'react-use-cart';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material'
import axios from "axios"
import Style from '../style'

import { useState, useEffect } from 'react'
function Page() {
  const [login, setLogin] = React.useState(false)

  const { addItem } = useCart();

  const [data, setData] = useState([{}])
  useEffect(() => {
    fetch('http://localhost:3300/products', {
      method: 'GET'
    }).then(res => res.json()).then(res => {
      setData([...res.splice(9)])
      console.log(data)
    })
  }, [])
  useEffect(() => {
    const token = "Bearer " + localStorage.getItem('token')

    return async () => {
      await axios.get('http://localhost:3300/getUser', { headers: { 'Authentication': token } }).then(async res => {
        (res.data.sucess && setLogin(true))
      })
    }
  }, [login])


  const classes = Style();
  return (
    <Container>
      <Grid container spacing={1}>
        <Grid item xs={12} sx={{display: 'flex', flexWrap: 'wrap'}}>
          {data.map((p) => (
            <div key={p.id}>
              <Card data-aos="fade-left" className={classes.card} sx={{ minWidth: 300 }}>
                <CardMedia
                  component="img"
                  height="340"
                  image={p.image}
                  alt="Product"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {p.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price - {p.price}
                  </Typography>
                </CardContent>
                <h4>Size - {p.size}</h4>
                {login && <button className={classes.addCart} onClick={()=> addItem(p)}>Add to Cart</button> }
              </Card>
            </div>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Page