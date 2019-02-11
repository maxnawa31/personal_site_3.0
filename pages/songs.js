import React, { Component } from 'react';
import Nav from '../components/nav';
import SongsForm from '../components/SongsForm';
import SongsList from '../components/SongsList';
class Songs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
    };
  }
  fetchSongs = () => {
    fetch('https://max-personal-website-backend.herokuapp.com/songs')
      .then(res => res.json())
      .then(data => this.setState({ songs: data }));
  }

  componentDidMount() {
    this.fetchSongs();
  }

  render() {
    return [
      <div className="container">
        <Nav />
        <SongsForm fetchSongs={this.fetchSongs} />

        <style jsx>
          {`
            @import url('https://fonts.googleapis.com/css?family=Roboto');

            .container {
              display: flex;
              align-items: center;
              width: 445px;
              flex-direction: column;
              margin: 130px 700px;
              color: black;
              font-family: 'Roboto';
            }
          `}
        </style>
      </div>,
      <SongsList songs={this.state.songs} />
    ];
  }
}

export default Songs;
