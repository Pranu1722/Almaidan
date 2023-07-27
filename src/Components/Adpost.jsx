// import React from 'react';
// import { Card, CardContent, Typography } from '@mui/material';


// function Adpost() {
//   return (
//     <>
//         <Card sx={{ width:'800px', marginLeft:'500px', marginTop:'100px' }}>
//         <CardContent>
//           <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//             Ad post
//           </Typography>
//         </CardContent>
//       </Card>
//     </>
//   )
// }

// export default Adpost;

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


const card = (
  <React.Fragment>
    <CardHeader title="Required House Maid" />
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Job Description
      </Typography>
      <Typography variant="body2">
        Part time maid wanted to take care of an elderly lady in farwaniya give
        her breakfast and clean the house Time from 9:00 am to 12:00 pm Salary
        40 kd
        <br />
        {'"Contact No:"'}
      </Typography>
    </CardContent>
    <CardActions >
      <Typography >September 14, 2016</Typography>
      <Box sx={{marginLeft:'500px'}}>
      <Button size="small">Contact</Button>
      </Box>
    </CardActions>
  </React.Fragment>
);

function Adpost() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}

export default Adpost;
