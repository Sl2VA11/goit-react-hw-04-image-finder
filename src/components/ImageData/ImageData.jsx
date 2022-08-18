import { useEffect, useState } from 'react';
import fetchImg from '../../services/fetchImg';
import Button from '../Button/Button';
import ImageGallery from '../ImageGallery/ImageGallery';
import ImagePendingView from '../Loader/Loader';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export function ImageData({ image }) {
  const [imageData, setImageData] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [page, setPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);

  useEffect(() => {

    
      setStatus(Status.PENDING);

      fetchImg(image, page)
        .then(response => {
          if (imageData !== null) {
            console.log('if');

            setImageData([...imageData, ...response.hits]);

            setStatus(Status.RESOLVED);

            return
          }
         
          setImageData(response.hits);
          
          setStatus(Status.RESOLVED);
        })
       .catch(error => setError(error, Status.REJECTED));
      
      
    


    

    



    // setTimeout(() => {
    //   window.scrollBy({
    //     top: 9999,
    //     behavior: 'smooth',
    //   });
    // }, '500');

    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, image]);

  const onLoadMore = () => {
    setPage(page=> page + 1);

    return;
  };

  if (status === Status.IDLE) {
    return <div className="status">Enter a picture name</div>;
  }

  if (status === Status.PENDING) {
    return <ImagePendingView />;
  }

  if (imageData.length === 0) {
    return (
      <div className="status" style={{ color: 'red' }}>
        Didn't find {image}. Enter the correct value please
      </div>
    );
  }

  if (status === Status.RESOLVED) {
    return (
      <>
        <ImageGallery images={imageData} />
        <Button onLoadMore={onLoadMore} />
      </>
    );
  }
}
