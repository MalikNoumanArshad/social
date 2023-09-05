import './App.css';
import SignUp from './components/signup';
import { Grid, MenuItem, Paper, Select } from '@mui/material';
import Login from './components/login';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import ProductList from './components/ProductCard';

function App() {
  const [product, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedLimit, setSelectedLimit] = useState(10);
  const [selectedSort, setSelectedSort] = useState('asc');


  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, []);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
        .then((res) => res.json())
        .then((json) => setFilteredProducts(json));
    } else {
      setFilteredProducts(product);
    }
  }, [selectedCategory, product]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=${selectedLimit}`) 
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [selectedLimit]); 
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?sort=${selectedSort}`) 
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [selectedSort]); 

  return (
    <Grid style={{ padding: '100px' }}>
      <ul style={{display:'flex',padding:'0 40px'}}>
      <a href='/'><li style={{display:'flex',padding:'10px 40px',backgroundColor:'rgb(0, 0, 77)',color:'white'}}>All</li></a>
             {categories.map((category) => (
         <a href='#'> <li style={{display:'flex',padding:'10px 40px',backgroundColor:'rgb(0, 0, 77)',color:'white'}} key={category} onClick={() => setSelectedCategory(category)}>
            {category} 
          </li></a>
        ))}
      </ul>
      <Select
          value={selectedLimit}
          onChange={(e) => setSelectedLimit(parseInt(e.target.value))}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={40}>40</MenuItem>
        </Select>
        <Select
          value={selectedSort}
          onChange={(e) => setSelectedSort(e.target.value)}
        >
          <MenuItem value={'asc'}>ASC</MenuItem>
          <MenuItem  value={'desc'}>Desc</MenuItem>
        </Select>
      {selectedCategory ? (<ProductList ProductNew={filteredProducts} />) : (<ProductList ProductNew={product} />)}
    </Grid>
  );
}

export default App;
