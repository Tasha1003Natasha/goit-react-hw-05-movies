import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../Moviesgallery/Moviesgallery.module.css';

export const Moviesgallery = ({ movies }) => {
  const location = useLocation();

  // console.log({ movies });
  return (
    <ul className={styles.list}>
      {movies &&
        movies.map(element => (
          <li key={element.id} className={styles.item}>
            <Link
              state={{ from: location }}
              to={`/movies/${element.id}`}
              className={styles.link}
            >
              <p className={styles.name}>
                {element.title || element.name || element.original_title}
              </p>
              <img
                width="400"
                src={
                  element.poster_path
                    ? `https://image.tmdb.org/t/p/w500${element.poster_path}`
                    : `https://s1.hostingkartinok.com/uploads/images/2022/07/40ceaea2e22257d2a139ca5a0c0b8ba9.jpg`
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
