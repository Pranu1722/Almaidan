import React from 'react';
import Adpost from './Adpost';
import { Box } from '@mui/material';

function Homepage() {
  return (
    <Box sx={{marginTop:'20px'}}>
        <Adpost/>
        <Adpost/>
        <Box sx={{ height:'100px', textAlign:'center', marginTop:'75px'}}> Ads can be posted here</Box>
        <Adpost/>
        <Adpost/>
    </Box>
  )
}

export default Homepage