import * as React from 'react';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import axios from 'axios'

export default function BoxSx() {
  const [data, setData] = React.useState({})

  React.useEffect(() => {
    const token = "Bearer " + localStorage.getItem('token')

    return () => {
      axios.get('http://localhost:3300/getUser', { headers: { 'Authentication': token } }).then(async res => {
        await setData(res.data.data)

        console.log('Login Status is :- ', res.data.data)
      })
    }
  }, [])

  return (
    <Container sx={{ p: 10 }}>
      <Box sx={{ width: 700, height: 400, ml: 30, backgroundColor: 'primary.dark', borderRadius: 5 }}>
        <Typography variant='h4' sx={{ color: 'white' }}>My Profile</Typography>
        <div className="underline" />
        <div className="d-flex">
          <AccountCircleIcon sx={{ color: 'white', fontSize: 100 }} />
          <Typography variant='h5' sx={{ color: 'white', mt: 4 }}>{data.name}</Typography>
        </div>
        <div className="underline" style={{ marginLeft: '0%' }} />

        <div className="d-flex" style={{flexDirection: 'column', textAlign: 'left', marginLeft: 300, marginTop: 50}}>
          <Typography variant='h5' sx={{color: 'white', mb: 3}}>Email: {data.email}</Typography>
          <Typography variant='h5' sx={{color: 'white', mb: 3}}>Phone: {data.phone}</Typography>
          <Typography variant='h5' sx={{color: 'white'}}>Gender: {data.gender}</Typography>
        </div>

      </Box>
    </Container>
  );
}
