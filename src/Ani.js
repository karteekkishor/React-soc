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
import Home from './Home';
import Movies1 from './Movies1';
import TopAiring from "./TopAiring"
import Mostpop from './Mostpop';
import Front from './Front'


export default function Ani() {
  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <img width="100" src="https://aniwatch.to/images/logo.png" alt="logo" />
            <Typography variant="h7" component="div" sx={{ flexGrow: 0.02 }}>
              <Link to='/home'>Home
              </Link>
            </Typography>
            <Typography variant="h7" component="div" sx={{ flexGrow: 0.02 }}>
              <Link to='/movies'>Movies</Link>
            </Typography>
            <Typography variant="h7" component="div" sx={{ flexGrow: 0.02 }}>
              <Link to='/top-airing'>TopAiring</Link>
            </Typography>
            <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
              <Link to='/mostpop'>Most Popular</Link>
            </Typography>
            <Button color="inherit" >
              <Link to="/form">Login</Link>
            </Button>
            <Button color="inherit">
              <Link to="/form">SignUp</Link>
            </Button>
          </Toolbar>

        </AppBar>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/movies" element={<Movies1 />} />
          <Route path="/top-airing" element={<TopAiring />} />
          <Route path="/mostpop" element={<Mostpop />} />
          <Route path="/form" element={<Form />} />
        </Routes>

      </Box>
    </Router>
  );
  }