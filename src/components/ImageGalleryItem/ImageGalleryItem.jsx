import Modal from 'components/Modal/Modal';
import { Component, useState } from 'react';
import css from './ImageGalleryItem.module.css'


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









export class ImageGalleryItem1 extends Component {
  state = {
    open: false,
  };

  closeModalEsp = e => {
    if (e.key === 'Escape') {
      this.setState({ open: false });
    }
  };
  closeModalBackdrop = () => {
    this.setState({ open: false });
  }
  render() {
    return (
      <>
        <li key={this.props} onClick={() => this.setState({ open: true })} className={css.item}>
          <img
            src={this.props.img}
            alt={this.props.tags}
            
            className={css.img}
          />
        </li>
        <Modal
          closeModalBackdrop={this.closeModalBackdrop}
          closeModalEsp={this.closeModalEsp}
          open={this.state.open}
          image={this.props}
          tags={this.props.tags}
        />
      </>
    );
  }
}
