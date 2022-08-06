import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css'
export default function ImageGallery({ images }) {
  
  return (
    <ul className={css.gallery}>
      {images.map(({id , webformatURL, tags}) => {
        
        return <ImageGalleryItem key={id} img={webformatURL} tags={ tags}/>;
      })}
    </ul>
  );
}
