import React from 'react'
import { Avatar, Button, FormControlLabel, Grid, Paper, TextField, Typography } from '@mui/material'
import { AddCircleOutlineOutlined, CheckBox } from '@mui/icons-material'
import {userSchema} from './formValidation'
const SignUp = () => {
    const paperstyle ={padding:'30px 20px',width:'400px',margin:'20px auto'};
    const formstyle ={margin:'10px 0'};
    const avatarstyle = {backgroundColor:'#00004d'};
   
  return (
    <Grid>
        <Paper elevation={20} style={paperstyle}>
        <Grid align='center' >
        <Avatar style={avatarstyle}>
            <AddCircleOutlineOutlined  />
        </Avatar>
        <h2>Sign Up</h2>
        <Typography>Please fill all fields to signup.</Typography>
        <form style={formstyle}>
            <TextField style={formstyle} fullWidth label="Name" />
            <TextField style={formstyle} fullWidth label="Email" />
            <TextField style={formstyle} fullWidth label="Phone Number"  />
            <TextField style={formstyle} type='password'  fullWidth label="Password" />
            <FormControlLabel control={<CheckBox name="checkedA" />} label="i accept the terms & Conditions" />
            <br />
            <Button type='submit' variant='contained' color='primary'> SIgn Up</Button>
            </form>
        </Grid>
        </Paper>
    </Grid>
  )
}

export default SignUp