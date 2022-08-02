import { Link } from 'react-router-dom';

export const Moviesgallery = ({ movies }) => {
  // console.log({ movies });
  return (
    <ul>
      {movies &&
        movies.map(element => (
          <li key={element.id}>
            <Link to={`/movies/${element.id}`}>
              {element.title || element.name || element.original_title}
            </Link>
          </li>
        ))}
    </ul>
  );
};
