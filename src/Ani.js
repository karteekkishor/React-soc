/*import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InfoIcon from '@mui/icons-material/Info';
import { Router,Link, Route, Routes } from 'react-router-dom';
import Form from './Form';


export default function Ani() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <img width="100" src='https://aniwatch.to/images/logo.png'></img>
          <Typography variant="h4" component="div" sx={{ flexGrow: 0.02}}>
           <a href="https://aniwatch.to/home"> Home</a>
          </Typography>
          <Typography variant="h4" component="div" sx={{ flexGrow: 0.02}}>
           <a href="https://aniwatch.to/movie">Movies</a>
          </Typography>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1}}>
            <a href="https://aniwatch.to/top-airing">Top Airing</a>
          </Typography>
          <Button color="inherit">
            login
          </Button>

          
        </Toolbar>
      </AppBar>

       
    </Box>
  );
}*/



import * as React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InfoIcon from '@mui/icons-material/Info';
import Form from './Form';

export default function Ani() {
  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <img width="100" src="https://aniwatch.to/images/logo.png" alt="logo" />
            <Typography variant="h7" component="div" sx={{ flexGrow: 0.02}}>
           <a href="https://aniwatch.to/home"> Home</a>
          </Typography>
          <Typography variant="h7" component="div" sx={{ flexGrow: 0.02}}>
           <a href="https://aniwatch.to/movie">Movies</a>
          </Typography>
          <Typography variant="h7" component="div" sx={{ flexGrow: 1}}>
            <a href="https://aniwatch.to/top-airing">Top Airing</a>
          </Typography>
            <Button color="inherit">
              <Link to="/form">Login</Link>
            </Button>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/top-airing" element={<TopAiring />} />
          <Route path="/form" element={<Form />} />
        </Routes>
        
      </Box>
    </Router>
  );
}

function Home() {
  return ;
}

function Movies() {
  return ;
}

function TopAiring() {
  return ;
}