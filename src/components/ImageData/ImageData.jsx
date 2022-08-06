import { Component } from 'react';
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
export class ImageData extends Component {
  state = {
    imageData: '',
    status: Status.IDLE,
    page: 1,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, imageData } = this.state;
    const { image } = this.props;

    if (prevProps.image !== image || prevState.page !== page) {

      this.setState({ status: Status.PENDING });

      fetchImg(image, page)
       
        .then(response =>
          this.setState({
            imageData: [...imageData, ...response.hits],
            status: Status.RESOLVED,
          })
          
        )        
       .catch(error => this.setState({ error, status: Status.REJECTED }));
      
        setTimeout(() => {
          window.scrollBy({
            top: 9999,
            behavior: 'smooth',
          });
        }, '500');
      
     
    }

    
  }
  
  onLoadMore = () => {
    this.setState({
      page: this.state.page + 1,
    });

    return;
  };

  render() {
    const { imageData, status } = this.state;
    console.log(imageData.length);
    if (status === 'idle') {
      return <div className="status">Enter a picture name</div>;
    }

    if (status === 'pending') {
      return <ImagePendingView />;
    }

    if (imageData.length === 0) {
      return (
        <div className="status" style={{ color: 'red' }}>
          Didn't find {this.props.image}. Enter the correct value please
        </div>
      );
    }

    if (status === 'resolved') {
      return (
        <>
          <ImageGallery images={imageData} />
          <Button onLoadMore={this.onLoadMore} />
        </>
      );
    }
  }
}
