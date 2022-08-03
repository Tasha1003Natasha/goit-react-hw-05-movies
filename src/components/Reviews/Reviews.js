import { fetchRewiesMovies } from 'service/service';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Review } from 'components/Review/Review';
// import PropTypes from 'prop-types';

export const Reviews = async () => {
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

        console.log(results);
        setReviews(results);
      } catch (error) {
        setError('Ooops. Something went wrong...');
      } finally {
        setLoading(false);
      }
    };
    getReviews();
  }, [movieId]);

  console.log(reviews);
  return (
    <>
      {loading && 'Loading...'}

      {reviews?.length ? (
        <ul>
          {reviews.map(element => {
            return (
              <li key={element.id}>
                <Review author={element.author} content={element.content} />
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

// Reviews.propTypes = {
//   reviews: PropTypes.object.isRequired,
// };
