import React from 'react';
import Adpost from './Adpost';
import { Box } from '@mui/material';

function Homepage() {
  return (
    <Box sx={{marginTop:'20px'}}>
        <Adpost/>
        <Adpost/>
        <Adpost/>
        <Adpost/>
    </Box>
  )
}

export default Homepage