import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';


function Adpost() {
  return (
    <>
        <Card sx={{ width:'800px', marginLeft:'500px', marginTop:'100px' }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Ad post
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}

export default Adpost