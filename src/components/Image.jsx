import React, { useState } from 'react';
import Image_Upload from './Image_Upload'; // Import your Image_Upload component

const Image = () => {
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleImageUpload = (files) => {
    // Handle the uploaded files here (e.g., set them in state)
    setUploadedImages([...uploadedImages, ...files]);
  };

  return (
    <div>
      <h1>Image Upload</h1>
      <Image_Upload onImageUpload={handleImageUpload} />
      {/* Display the uploaded images */}
      <div>
        {uploadedImages.map((file, index) => (
          <img key={index} src={URL.createObjectURL(file)} alt={`Uploaded ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Image;
