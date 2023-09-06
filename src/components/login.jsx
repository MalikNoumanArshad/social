import React from 'react'
import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import {  SupervisedUserCircle } from '@mui/icons-material'
import { userSchema } from './formValidation'
const Login = () => {
    const paperstyle = { padding: '30px 20px', width: '400px', margin: '20px auto' };
    const formstyle = { margin: '10px 0' };
    const avatarstyle = { backgroundColor: '#00004d' };
    return (
        <Grid>
            <Paper elevation={20} style={paperstyle}>
                <Grid align='center' >
                    <Avatar style={avatarstyle}>
                        <SupervisedUserCircle />
                    </Avatar>
                    <h2>Login</h2>
                    <Typography>Please fill all fields to signup.</Typography>
                    <form style={formstyle}>
                        <TextField style={formstyle} name='email' fullWidth label="Email" />
                        <TextField style={formstyle} name='password' type='password' fullWidth label="Password" />
                        <br />
                        <Button type='submit' variant='contained' color='primary'> Login </Button>
                    </form>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default Login