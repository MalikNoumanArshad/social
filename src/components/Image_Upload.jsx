import { CancelOutlined } from '@mui/icons-material';
import { IconButton, ImageList, ImageListItem, ImageListItemBar, Typography } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const validImageTypes = ['image/jpeg', 'image/jpg', 'image/png'];

const Image_Upload = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');

  const handleRemoveImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const onDrop = useCallback((acceptedFiles) => {
    const invalidFiles = acceptedFiles.filter(
      (file) => !validImageTypes.includes(file.type)
    );

    if (invalidFiles.length > 0) {
      setError('Invalid file format. Please upload only PNG, JPEG, or JPG files.');
    } else {
      setError('');
      setImages([...images, ...acceptedFiles]);
    }
  }, [images]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div >
        <center>

        <h1>Image Upload</h1>
      <div style={{border:'1px solid black',width:'300px',padding:'20px',cursor:'copy'}} {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
        <input  {...getInputProps()} />
        <p>Drag & drop some images here, or click to select images</p>
      </div>
      </center>
      {error && <p className="error">{error}</p>}
      <ImageList sx={{ width: 500 }} >
      {images.map((file,index) => (
        <ImageListItem key={index}>
            
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              position="top"
              actionIcon={
                <IconButton
                onClick={()=>handleRemoveImage(index)}
                  sx={{ color: 'white' }}
                >
                  <CancelOutlined />
                </IconButton>
              }
              actionPosition="right"
            />
          <img
            src={URL.createObjectURL(file)}
            
            alt={`Uploaded ${index}`}
            loading="lazy"
          />
          
         
        </ImageListItem>
      ))}
    </ImageList>
     
    </div>
  );
};

export default Image_Upload;
