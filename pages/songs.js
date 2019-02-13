import React, { Component } from 'react';
import Nav from '../components/nav';
import SongsForm from '../components/SongsForm';
import UniversalForm from '../components/UniversalForm'
import SongsList from '../components/SongsList';
class Songs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    };
  }
  fetchSongs = () => {
    fetch('https://max-personal-website-backend.herokuapp.com/songs')
      .then(res => res.json())
      .then(data => this.setState({ songs: data }));
  };

  componentDidMount() {
    this.fetchSongs();
  }

  render() {
    return [
      <div className="container">
        <Nav />
        <UniversalForm mode={'songs'} secondFetch={this.fetchSongs} />

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
      <SongsList songs={this.state.songs} />
    ];
  }
}

export default Songs;
