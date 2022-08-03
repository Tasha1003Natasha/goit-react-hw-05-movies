import PropTypes from 'prop-types';
import styles from '../Reviews/Reviews.module.css';

export const Review = ({ author, content }) => {
  return (
    <div>
      <b className={styles.text}>{author}</b>
      <p className={styles.title}>{content}</p>
    </div>
  );
};

Review.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
