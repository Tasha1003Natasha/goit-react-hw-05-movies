import PropTypes from 'prop-types';

export const Review = ({ author, content }) => {
  return (
    <div>
      <b>{author}</b>
      <p>{content}</p>
    </div>
  );
};

Review.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
