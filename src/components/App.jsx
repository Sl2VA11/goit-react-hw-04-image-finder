import { Component } from 'react';
import { ImageData } from './ImageData/ImageData';
import { Searchbar } from './Searchbar/Searchbar';


export class App extends Component {
  state = {
    image: '',
  };

  onSubmit = image => {
    this.setState({ image });
  };

  

  render() {
    
    return (
      <div>
        
        <Searchbar onSubmit={this.onSubmit} />
        <ImageData
          image={this.state.image.searchChange}

        />
        
      </div>
    );
    
  }
}
