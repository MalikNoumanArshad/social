import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { useState, useEffect } from 'react';
import { Rating } from '@mui/material';

const ProductPage=()=> {
    const queryParameters = new URLSearchParams(window.location.search);
    const id = queryParameters.get("id");
    const [product, setproduct] =useState(id);
 useEffect(()=>{
    const link = `https://fakestoreapi.com/products/${id}`
  fetch(link)
  .then(res=>{
    return res.json();
  })
  .then(data=>{
    setproduct(data);
  })
 },[]);
  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
        overflow: { xs: 'auto', sm: 'initial' },
      }}
    >
      
      <Card
        orientation="horizontal"
        sx={{
          width: '100%',
          flexWrap: 'wrap',
          [`& > *`]: {
            '--stack-point': '500px',
            minWidth:
              'clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)',
          },
          // make the card resizable for demo
          overflow: 'auto',
          resize: 'horizontal',
        }}
      >
        <AspectRatio flex ratio="1" maxHeight={250} sx={{ minWidth: 250 }}>
          <img
            src={product.image}
            srcSet={product.image}
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <CardContent>
        <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
            {product.category}
          </Typography>
          <Typography fontSize="xl" fontWeight="lg">
            {product.title}
          </Typography>
         
          <Sheet
            sx={{
              bgcolor: 'background.level1',
              borderRadius: 'lg',
              p: 1.5,
              my: 1.5,
              display: 'block',
              gap: 0,
              '& > div': { flex: 1 },
            }}
          >
            <div>
              <Typography level="body-xs" fontWeight="lg">
                Price
              </Typography>
              <Typography fontWeight="lg">${product.price}</Typography>
            </div>
            
              
            
          </Sheet>
          <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
            {product.description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
export default ProductPage;