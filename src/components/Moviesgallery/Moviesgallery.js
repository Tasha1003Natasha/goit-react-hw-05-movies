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
              <img
                width="400"
                src={
                  element.poster_path
                    ? `https://image.tmdb.org/t/p/w500${element.poster_path}`
                    : `https://howfix.net/wp-content/uploads/2018/02/sIaRmaFSMfrw8QJIBAa8mA-article.png`
                }
                alt={element.title}
                className={styles.img_gallary}
              />
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
