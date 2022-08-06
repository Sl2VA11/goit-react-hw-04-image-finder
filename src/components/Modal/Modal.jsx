// import { render } from '@testing-library/react';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './/Modal.module.css';
const selectedModal = document.querySelector('#root-modal');
export default class Modal extends Component {
  element = document.createElement('div');

  componentDidMount() {
    selectedModal.appendChild(this.element);
    document.addEventListener('keydown', this.props.closeModalEsp);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.props.closeModalEsp);
  }

  render() {
    const { open, closeModalBackdrop, image, tags } = this.props
    
    if (!open) {
      return null;
    }
    return createPortal(
      <div className={css.overlay} onClick={closeModalBackdrop}>
        <div>
          <img src={image.img} alt={tags} />
        </div>
      </div>,
      this.element
    );
  }
}
