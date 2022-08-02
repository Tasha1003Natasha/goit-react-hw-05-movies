import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../Moviesgallery/Moviesgallery.module.css';

export const Moviesgallery = ({ movies }) => {
  // console.log({ movies });
  return (
    <ul className={styles.list}>
      {movies &&
        movies.map(element => (
          <li key={element.id} className={styles.item}>
            <Link to={`/movies/${element.id}`} className={styles.link}>
              {element.title || element.name || element.original_title}
            </Link>
          </li>
        ))}
    </ul>
  );
};

Moviesgallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
