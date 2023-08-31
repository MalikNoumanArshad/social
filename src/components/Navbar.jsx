import React from 'react'
import logo from '../logo.svg'

import { Grid, Paper } from '@mui/material';
const Navbar = () => {
    const paperstyle = { width:'100%',padding: '30px 20px',  margin: '0 auto',backgroundColor:'#00004d' };
    const logos ={width:'80px'}
    const listst = {listStyle:'none',fontSize:'22px',padding:'0 10px',color:'white',};
    const linkstyle = {textDecoration:'none',}
  return (
    <Paper elevation={20} style={paperstyle}>
      <Grid style={{display:'flex'}}>
        <img src={logo} style={logos}/>
        <Grid>
          <ul style={{display:'flex',textDecorationStyle:'none'}}>
          <a style={linkstyle} href='/'> 
            <li style={listst}>Home</li>
            </a>
            <a style={linkstyle} href='/Signup'> 
            <li style={listst}>SignUp</li>
            </a>
            <a style={linkstyle} href='/Login'> 
            <li style={listst}>Login</li>
            </a>
          </ul>
        </Grid>
      </Grid>
      </Paper>
  )
}

export default Navbar