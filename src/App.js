import './App.css';
import SignUp from './components/signup';
import { Grid, Paper } from '@mui/material';
import Login from './components/login';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import ProductList from './components/ProductCard';
function App() {
 const [product, setproduct] =useState(null);
 useEffect(()=>{
  fetch('https://fakestoreapi.com/products')
  .then(res=>{
    return res.json();
  })
  .then(data=>{
    setproduct(data);
  })
 },[]);
  return (
    <Grid style={{padding:'100px'}}>
        {product && <ProductList ProductNew={product} />}

    </Grid>
    
  );
}

export default App;
