import React from 'react';
import Loader from '../components/Loader';
const MoviesList = props => {
  const { movies } = props;
  if (movies.length === 0) {
    return <Loader />;
  }
  return (
    <ul>
      {movies.map(movie => {
        return (
          <ul className="list-container">
            <li>
              <a target={'blank'} href={movie.link}>
                {movie.title}
              </a>
            </li>
            <style jsx>
              {`
                .list-container {
                  margin-left: 10%;
                  width: 40%;
                  list-style-type: disc;
                }
                li {
                  line-height: 30px;
                }
              `}
            </style>
          </ul>
        );
      })}
    </ul>
  );
};

export default MoviesList;
