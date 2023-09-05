import './App.css';
import { Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useEffect, useState } from 'react';
import ProductList from './components/ProductCard';

function App() {
  const [product, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedLimit, setSelectedLimit] = useState(5);
  const [selectedSort, setSelectedSort] = useState('asc');

  useEffect(() => {
    let apiUrl = 'https://fakestoreapi.com/products';

    if (selectedCategory) {
      apiUrl = `https://fakestoreapi.com/products/category/${selectedCategory}`;
    } else {
      apiUrl += `?limit=${selectedLimit}&sort=${selectedSort}`;
    }

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [selectedCategory, selectedLimit, selectedSort]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, []);
  
  return (
    <Grid style={{ padding: '100px' }}>
      <FormControl style={{ marginBottom: '20px',width:'300px' }}>
        <InputLabel id="category">Select Category</InputLabel>
        <Select
          labelId="category"
          label="Category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <MenuItem value="">All</MenuItem>
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl style={{ marginBottom: '20px',width:'300px' }}>
        <InputLabel id="limit">Select Limit</InputLabel>
        <Select
        label="Limit"
          labelId="limit"
          value={selectedLimit}
          onChange={(e) => setSelectedLimit(e.target.value)}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={40}>40</MenuItem>
        </Select>
      </FormControl>

      <FormControl  style={{ marginBottom: '20px',width:'300px' }}>
        <InputLabel id="sort">Select Sort Order</InputLabel>
        <Select
        label="Sort"
          labelId="sort"
          value={selectedSort}
          onChange={(e) => setSelectedSort(e.target.value)}
        >
          <MenuItem value={'asc'}>ASC</MenuItem>
          <MenuItem value={'desc'}>Desc</MenuItem>
        </Select>
      </FormControl>

      <ProductList ProductNew={product} />
    </Grid>
  );
}

export default App;
