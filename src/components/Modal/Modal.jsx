// import { render } from '@testing-library/react';
import { Component, useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './/Modal.module.css';
const selectedModal = document.querySelector('#root-modal');

export function Modal({ closeModalEsp, closeModalBackdrop, image, open, tags }) {
  const element = document.createElement('div');

  useEffect(() => {
    selectedModal.appendChild(this.element);
    document.addEventListener('keydown', closeModalEsp);
  }, [closeModalEsp]);

  useEffect(() => {
    return () => {
      document.removeEventListener('keydown', closeModalEsp);
    };
  }, [closeModalEsp]);

  if (!open) {
    return null;
  }

  return createPortal(
    <div className={css.overlay} onClick={closeModalBackdrop}>
      <div>
        <img src={image} alt={tags} />
      </div>
    </div>,
    element
  );
}







export default class Modal1 extends Component {
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
          <img src={image} alt={tags} />
        </div>
      </div>,
      this.element
    );
  }
}
