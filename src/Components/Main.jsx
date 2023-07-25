import React from 'react';
import logo2 from './Images/logo2.png';
import './style.css';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import styled from '@emotion/styled';
import { InputBase } from '@mui/material';
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    backgroundColor: '#eeeeee',
    '&:hover': {
      backgroundColor: '#e0e0e0',
    },
    borderRadius: '15px',
    width: '600px', 
    
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    position: 'absolute',
    height: '20px',

  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {  
    },
    height: '100%',
    color: 'black',
    
 
  }));

function Main() {
  return (
    <>

    <div className="logo2">
      <img src={logo2} alt='Market Magnet'/>
        <h2>Market Magnet</h2>
      </div>
   
      <Box sx={{ marginLeft: '600px', marginTop: '-80px', height:'80px', width:'100%' }}>
      <Toolbar>
        <Search>
          <SearchIconWrapper >
            <SearchIcon sx={{ width:'100%',height:'35px', padding: '5px' }}/>
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            sx={{  paddingLeft: '40px' }}
          />
        </Search>
      </Toolbar>
    </Box>
    <Box sx={{ marginRight: '6px', marginTop: '-65px' }}>
    <Stack direction="row" spacing={2} marginbottom='10px' >
      <Button sx={{ borderRadius: "20px",  marginLeft:'1500px', }} variant="outlined">
        Login
      </Button>
      <Button sx={{ borderRadius: "20px" }} variant="outlined">
        Register
      </Button>
    </Stack>
    </Box>
       

      <Card sx={{ minWidth: 275, marginTop:'20px' }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Ad post
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Ad post
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Ad post
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Ad post
          </Typography>
        </CardContent>
      </Card>
      <CardActions></CardActions>
  
    </>
  )
}

export default Main;