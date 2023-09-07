import { CancelOutlined } from '@mui/icons-material';
import { Card, IconButton, ImageList, ImageListItem, ImageListItemBar, Typography } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const validVideoTypes = ['video/mp4'];

const Video_Upload = () => {
    const [videos, setVideos] = useState([]);
    const [error, setError] = useState('');
  
    const handleRemoveVideo = (index) => {
      const newVideos = [...videos];
      newVideos.splice(index, 1);
      setVideos(newVideos);
    };
  
    const onDrop = useCallback((acceptedFiles) => {
      const invalidFiles = acceptedFiles.filter(
        (file) => !validVideoTypes.includes(file.type)
      );
  
      if (invalidFiles.length > 0) {
        setError('Invalid file format. Please upload only mp4');
      } else {
        setError('');
        setVideos([...videos, ...acceptedFiles]);
      }
    }, [videos]);
  
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  
    return (
      <div >
          <center>
  
          <h1>Video Upload</h1>
        <div style={{border:'1px solid black',width:'300px',padding:'20px',cursor:'copy'}} {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
          <input  {...getInputProps()} />
          <p>Drag & drop some Videos here, or click to select videos</p>
        </div>
        </center>

        {error && <p className="error">{error}</p>}
        <div style={{display:'flex',flexDirection:'row'}}>
        <div style={{padding:'30px'}}>
        
        {videos.map((file,index) => (
          <ImageListItem key={index} style={{display:'inline-block',padding:'20px 20px',}}>
              <video
            controls
            loop
            muted
            height={250}
          >
            <source
              src={URL.createObjectURL(file)}
              type="video/mp4"
            />
          </video>
              <ImageListItemBar
                sx={{
                  background:
                    'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                }}
                style={{zIndex:'999'}}
                position="top"
                actionIcon={
                  <IconButton
                  onClick={()=>handleRemoveVideo(index)}
                    sx={{ color: 'white' }}
                  >
                    <CancelOutlined />
                  </IconButton>
                }
                actionPosition="right"
              />
            
            
          </ImageListItem>
        ))}
      </div>
      </div>
      </div>
    );
}

export default Video_Upload