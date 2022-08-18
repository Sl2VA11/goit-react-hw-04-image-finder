import { Component, useState } from 'react';
import css from './Search.module.css'
import propTypes from 'prop-types';

export function Searchbar({ onSubmit }) {
  const [searchChange, setSearchChange] = useState('');

  const handleChange = e => {
    setSearchChange(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(searchChange);

    setSearchChange('');
    

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


Searchbar.propTypes = {
  onSubmit: propTypes.func
};

















