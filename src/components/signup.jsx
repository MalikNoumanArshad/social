import React, { useState } from 'react';
import { Avatar, Button, FormControl, FormControlLabel, FormHelperText, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material';
import { AddCircleOutlineOutlined, CheckBox } from '@mui/icons-material';
import { userSchema } from './formValidation';

const SignUp = () => {
    const country = ['Pakistan', 'India'];
    const city = {
        'Pakistan': ['Sargodha', 'Islamabad', 'Lahore'],
        'India': ['Mumbai', 'Dehli', 'Gujrat']
    }
    const paperstyle = { padding: '30px 20px', width: '400px', margin: '20px auto' };
    const formstyle = { margin: '10px 0', textAlign: 'left' };
    const avatarstyle = { backgroundColor: '#00004d' };
    const [selectedCountry, setSelectedCountry] = useState('')



    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        password: '',
        acceptTerms: false,
        country:'',
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
                        <FormControl  style={formstyle} fullWidth>
                            <InputLabel id="country">Country</InputLabel>
                            <Select
                            onChange={(e)=>{setSelectedCountry(e.target.value);
                                setFormData({...formData,country:e.target.value});
                            }
                                }
                            error={Boolean(errors.country)}

                            labelId='country'
                                
                                label="Category"

                               
                            >
                                {country.map(countries => {
                                    return (
                                        <MenuItem value={countries} key={countries}>
                                            {countries}
                                        </MenuItem>
                                    )
                                })}
                            </Select>
                            <FormHelperText style={{color:'#d32f2f'}}>{errors.country}</FormHelperText>
                        </FormControl>

                        {selectedCountry && (
                            <FormControl fullWidth style={formstyle}>
                                <InputLabel htmlFor="city">City</InputLabel>
                                <Select
                                
                                label='City'
                                labelId='city'
                                    fullWidth
                                    inputProps={{
                                        name: 'city',
                                        id: 'city-select',
                                    }}
                                >
                                    {city[selectedCountry].map(cities => {
                                        return (
                                            <MenuItem value={cities} key={cities}>
                                                {cities}
                                            </MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>
                        )}

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
                            style={formstyle}
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
