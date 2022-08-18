import { useState } from 'react';
import { ImageData } from './ImageData/ImageData';
import { Searchbar } from './Searchbar/Searchbar';

export function App() {
  const [images, setImages] = useState('');

  const onSubmit = image => {
    if (image === images) {
      return
    }
    console.log(image === images);
    console.log(image);
    setImages(image);
  };

  return (
    
    <div>
      <Searchbar onSubmit={onSubmit} />
     
       {images !== '' && <ImageData image={images} />}
      
     
    </div>
  );
}


