import { fetchRewiesMovies } from 'service/service';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Review } from 'components/Review/Review';
import styles from '../Reviews/Reviews.module.css';

// import PropTypes from 'prop-types';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getReviews = async () => {
      // fetchRewiesMovies(movieId).then(({ results }) => setReviews(results));
      try {
        setLoading(true);
        const { results } = await fetchRewiesMovies(movieId);
        setReviews(results);
      } catch (error) {
        setError('Ooops. Something went wrong...');
      } finally {
        setLoading(false);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <>
      {loading && 'Loading...'}

      {reviews?.length ? (
        <ul className={styles.list}>
          {reviews.map(element => {
            return (
              <li key={element.id}>
                <Review
                  author={element.author}
                  content={element.content}
                  className={styles.item}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
      {error && <div>{error}</div>}
    </>
  );
};
