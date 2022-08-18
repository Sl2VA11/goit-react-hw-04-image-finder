import { useState, useEffect } from 'react';
// import { ImageData } from './ImageData/ImageData';
import { Searchbar } from './Searchbar/Searchbar';
import fetchImg from '../services/fetchImg';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import ImagePendingView from './Loader/Loader';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export function App() {
  const [images, setImages] = useState('');
  const [imageData, setImageData] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [page, setPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);

  const onSubmit = image => {
    setImages(image);

    if (image !== images) {
      setImageData(null);
    }
  };

  useEffect(() => {
    if (!images) {
      return;
    }

      setStatus(Status.PENDING);
      fetchImg(images, page)
        .then(response => {
          if (imageData !== null) {
            setImageData([...imageData, ...response.hits]);
            setStatus(Status.RESOLVED);

            return;
          }

          setImageData(response.hits);

          setStatus(Status.RESOLVED);
        })
        .catch(error => setError(error, Status.REJECTED));

    setTimeout(() => {
      window.scrollBy({
        top: 9999,
        behavior: 'smooth',
      });
    }, '500');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images, page]);

  const onLoadMore = () => {
    setPage(page => page + 1);

    return;
  };



  return (
    <>
      <Searchbar onSubmit={onSubmit} setImageData={setImageData} />

      {status === Status.IDLE && (
        <div className="status">Enter a picture name</div>
      )}

      {status === Status.PENDING && <ImagePendingView />}


      {status === Status.RESOLVED && imageData !== null && (
        <>
          
          {imageData.length === 0 && (
            <div className="status" style={{ color: 'red' }}>
              Didn't find {images}. Enter the correct value please
            </div>
          )}

          <ImageGallery images={imageData} />
          {imageData.length !== 0 && <Button onLoadMore={onLoadMore} />}
        </>
      )}
    </>
  );
}
