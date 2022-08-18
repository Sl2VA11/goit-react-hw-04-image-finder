import { Component, useState } from 'react';
import css from './Search.module.css'


export function Searchbar({onSubmit}) {
  const [searchChange, setSearchChange] = useState('');

  const handleChange = e => {
    setSearchChange(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    
    e.preventDefault();
  
    onSubmit(searchChange);
    setSearchChange('')

    
  };
 
  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          value={searchChange}
          onChange={handleChange}
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={css.button}>
          <span className="button-label">Search</span>
        </button>
      </form>
    </header>
  );
}
























export class Searchbar1 extends Component {
  state = {
    searchChange: '',
  };

  handleChange = e => {
    this.setState({ searchChange: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.setState({ searchChange: '' });
  };

  render() {
    return (  
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <input
            value={this.state.searchChange}
            onChange={this.handleChange}
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit" className={css.button}>
            <span className="button-label">Search</span>
          </button>
        </form>
      </header>
    );
  }
}