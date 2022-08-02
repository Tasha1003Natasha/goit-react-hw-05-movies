import { fetchCastMovies } from 'service/service';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const [actors, setActors] = useState(null);
  const { movieId } = useParams();
  console.log(useParams());

  useEffect(() => {
    const getActors = () => {
      fetchCastMovies(movieId).then(({ cast }) => setActors(cast));
    };
    getActors();
  }, [movieId]);

  return (
    <>
      <ul>
        {actors &&
          actors.map(element => {
            return (
              <li key={element.id}>
                <img
                  src={
                    element.profile_path
                      ? `https://image.tmdb.org/t/p/w500${element.profile_path}`
                      : `https://howfix.net/wp-content/uploads/2018/02/sIaRmaFSMfrw8QJIBAa8mA-article.png`
                  }
                  alt={`${element.title} portrait`}
                />
                <div>
                  <p>Name: {element.name}</p>
                  <p>Character: {element.character}</p>
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
};
