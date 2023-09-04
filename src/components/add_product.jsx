import React, { useState } from 'react';
import { Avatar, Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material';
import { AddCircleOutlineOutlined } from '@mui/icons-material';
import * as Yup from 'yup';

const AddProduct = () => {
    const paperstyle = { padding: '30px 20px', width: '400px', margin: '20px auto' };
    const formstyle = { margin: '10px 0' };
    const avatarstyle = { backgroundColor: '#00004d' };

    const [formData, setFormData] = useState({
        title: '', price: '', image: '', description: '',
    });
    const [errors, setErrors] = useState({});

    const productSchema = Yup.object().shape({
        title: Yup.string().required('Product title is required'),
        price: Yup.number().positive('Price must be a positive number').required('Price is required').typeError("Price must be a number"),
        image: Yup.string().url('Invalid image URL').required('Product image URL is required'),
        description: Yup.string().required('Product description is required'),
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await productSchema.validate(formData, { abortEarly: false });
            const response = await fetch('https://fakestoreapi.com/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: formData.title,
                    price: formData.price,
                    image: formData.image,
                    description: formData.description,
                }),
            });

            if (response.ok) {
                alert('Product added successfully');
                setFormData({
                    title: '',
                    price: '',
                    image: '',
                    description: '',
                });
            } else {
                console.error('Failed to add the product');
            }
        } catch (validationErrors) {
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
                    <h2>Add Product</h2>
                    <Typography>Please fill all fields to Add Product.</Typography>
                    <form style={formstyle} onSubmit={handleSubmit}>
                        <TextField
                            style={formstyle}
                            fullWidth
                            label="Product Title"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            error={Boolean(errors.title)}
                            helperText={errors.title}
                        />
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value='Category'
                                label="Category"
                                
                            >
                                
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            style={formstyle}
                            fullWidth
                            label="Price"
                            value={formData.price}
                            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                            error={Boolean(errors.price)}
                            helperText={errors.price}
                        />
                        <TextField
                            style={formstyle}
                            fullWidth
                            label="Product Image URL"
                            value={formData.image}
                            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                            error={Boolean(errors.image)}
                            helperText={errors.image}
                        />
                        <TextField
                            style={formstyle}
                            fullWidth
                            label="Description"
                            multiline
                            rows={4}
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            error={Boolean(errors.description)}
                            helperText={errors.description}
                        />
                        <br />
                        <Button type='submit' variant='contained' color='primary'>Add Product</Button>
                    </form>
                </Grid>
            </Paper>
        </Grid>
    );
}

export default AddProduct;
