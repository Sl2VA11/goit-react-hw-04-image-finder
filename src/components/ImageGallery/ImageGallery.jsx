import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css'
import propTypes from 'prop-types';
export default function ImageGallery({ images }) {
  
  return (
    <ul className={css.gallery}>
      {images.map(({id , webformatURL, tags}) => {
        
        return <ImageGalleryItem key={id} img={webformatURL} tags={ tags}/>;
      })}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: propTypes.array
};