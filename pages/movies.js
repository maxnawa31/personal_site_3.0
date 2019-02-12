import React, { Component } from 'react';
import Nav from '../components/nav';
import MoviesForm from '../components/MoviesForm';
import MoviesList from '../components/MoviesList';
class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }
  fetchMovies = () => {
    fetch('https://max-personal-website-backend.herokuapp.com/movies')
      .then(res => res.json())
      .then(data => this.setState({ movies: data }));
  }

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    return [
      <div className="container">
        <Nav />
        <MoviesForm fetchMovies={this.fetchMovies} />

        <style jsx>
          {`
            @import url('https://fonts.googleapis.com/css?family=Roboto');

            .container {
              display: flex;
              align-items: center;
              width: 445px;
              flex-direction: column;
              margin: 130px 500px;
              color: black;
              font-family: 'Roboto';
            }
            @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
              .container {
                margin: 130px 30%;
                font-size: 1.5em;
              }
            }
          `}
        </style>
      </div>,
      <MoviesList movies={this.state.movies} />
    ];
  }
}

export default Movies;
