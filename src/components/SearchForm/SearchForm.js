import { useState } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../SearchForm/SearchForm.module.css';

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleNameChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      toast.error('Enter the name in the search', { theme: 'colored' });
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={styles.SearchForm_button}>
          <span className={styles.button_label}>Search</span>
        </button>

        <input
          className={styles.SearchForm_input}
          type="text"
          name="query"
          value={query}
          onChange={handleNameChange}
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />
      </form>
      <ToastContainer />
    </header>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
