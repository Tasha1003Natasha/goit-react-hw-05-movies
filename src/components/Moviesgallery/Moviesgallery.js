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
              <p className={styles.name}>
                {element.title || element.name || element.original_title}
              </p>
              <img
                width="400"
                src={
                  element.poster_path
                    ? `https://image.tmdb.org/t/p/w500${element.poster_path}`
                    : `https://защитныетенты.рф/kernel/preview.php?file=shop/goods/nophoto.jpg&width=400&height=300&method=add`
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
