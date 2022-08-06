import Modal from 'components/Modal/Modal';
import { Component } from 'react';
import css from './ImageGalleryItem.module.css'
export class ImageGalleryItem extends Component {
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
