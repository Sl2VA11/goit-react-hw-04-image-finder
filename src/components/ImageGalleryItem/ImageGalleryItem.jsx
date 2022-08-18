import Modal from 'components/Modal/Modal';
import { useState } from 'react';
import css from './ImageGalleryItem.module.css'
import propTypes from 'prop-types';

export function ImageGalleryItem({ img, tags }) {
  const [open, setOpen] = useState(false);

  const closeModalEsp = e => {
    if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  const closeModalBackdrop = () => {
    setOpen(false);
  };

  return (
    <>
      <li
        
        onClick={() => setOpen( true )}
        className={css.item}
      >
        <img src={img} alt={tags} className={css.img} />
      </li>
      <Modal
        closeModalBackdrop={closeModalBackdrop}
        closeModalEsp={closeModalEsp}
        open={open}
        image={img}
        tags={tags}
      />
    </>
  );
}

ImageGalleryItem.propTypes = {
  img: propTypes.string,
  tags: propTypes.string,
};







