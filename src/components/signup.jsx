import React, { useState } from 'react';
import { Avatar, Button, FormControlLabel, Grid, Paper, TextField, Typography } from '@mui/material';
import { AddCircleOutlineOutlined, CheckBox } from '@mui/icons-material';
import { userSchema } from './formValidation';
import * as Yup from 'yup';

const SignUp = () => {
    const paperstyle = { padding: '30px 20px', width: '400px', margin: '20px auto' };
    const formstyle = { margin: '10px 0' };
    const avatarstyle = { backgroundColor: '#00004d' };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        password: '',
        acceptTerms: false,
    });
    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await userSchema.validate(formData, { abortEarly: false });
        }
        catch (validationErrors) {
            const newErrors = {};

            validationErrors.inner.forEach((error) => {

                newErrors[error.path] = error.message;
            });
            setErrors(newErrors);
        }
    };

    return (
        <Grid>
            <Paper elevation={20} style={paperstyle}>
                <Grid align='center'>
                    <Avatar style={avatarstyle}>
                        <AddCircleOutlineOutlined />
                    </Avatar>
                    <h2>Sign Up</h2>
                    <Typography>Please fill all fields to signup.</Typography>
                    <form style={formstyle} onSubmit={handleSubmit}>
                        <TextField style={formstyle} fullWidth label="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            error={Boolean(errors.name)}
                            helperText={errors.name}
                        />
                        <TextField style={formstyle} fullWidth label="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            error={Boolean(errors.email)}
                            helperText={errors.email}
                        />
                        <TextField
                            style={formstyle}
                            fullWidth
                            label="Phone Number"
                            value={formData.phoneNumber}
                            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                            error={Boolean(errors.phoneNumber)}
                            helperText={errors.phoneNumber}
                        />
                        <TextField
                            style={formstyle}
                            type='password'
                            fullWidth
                            label="Password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            error={Boolean(errors.password)}
                            helperText={errors.password}
                        />
                        <FormControlLabel
                            control={<CheckBox name="acceptTerms" />}
                            label="I accept the terms & Conditions"
                            
                        />
                        <br />
                        <Button type='submit' variant='contained' color='primary'>Sign Up</Button>
                    </form>
                </Grid>
            </Paper>
        </Grid>
    );
}

export default SignUp;
