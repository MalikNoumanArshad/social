import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import { useState, useEffect } from 'react';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Box, Rating } from '@mui/material';
import { Star, StarBorder, StayPrimaryLandscapeOutlined } from '@mui/icons-material';

const ProductCard=({ProductNew})=> {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            
            {ProductNew.map((values)=>{
                return(
            <Card sx={{ width: 320, maxWidth: '100%',padding:'20px',margin:'20px 0', boxShadow: 'lg' }}>
              <CardOverflow>
                <AspectRatio sx={{ minWidth: 200 }}>
                  <img
                    src={values.image}
                    srcSet={values.image}
                    loading="lazy"
                    alt=""
                  />
                </AspectRatio>
              </CardOverflow>
              <CardContent>
                <Typography level="body-xs">{values.category}</Typography>
                <Link
                  href={`/ProductPage/?id=${values.id}`}
                  fontWeight="md"
                  color="neutral"
                  textColor="text.primary"
                  overlay
                  
                >
                  {values.title}
                  
                </Link>
                <Rating value={values.rating.rate} readOnly />
                    <Typography level="title-lg"
                   
                >
                    {values.count}
                    </Typography>
                <Typography
                  level="title-lg"
                  sx={{ mt: 1, fontWeight: 'xl' }}  
                >
                  ${values.price}
                </Typography>
                <Typography
                whiteSpace={10}
                >
                {values.description.split(' ').slice(0,10).join(' ')}
                </Typography>
              </CardContent>
              
            </Card>
                )
        })}
            </div>

          );
    
  
}

export default ProductCard;