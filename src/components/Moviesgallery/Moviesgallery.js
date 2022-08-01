import { Link } from 'react-router-dom';

export const Moviesgallery = ({ movies }) => {
  // console.log({ movies });
  return (
    <ul>
      {movies.map(element => (
        <li key={element.id}>
          <Link to={element.id}>
            {element.title || element.name || element.original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
