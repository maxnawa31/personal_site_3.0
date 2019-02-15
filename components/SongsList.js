import React from 'react';
import Loader from '../components/Loader';
const SongsList = props => {
  const { songs } = props;
  if (songs.length === 0) {
    return <Loader />;
  }
  return (
    <ul>
      {songs.map(song => {
        return (
          <ul className="list-container">
            <li>
              <a target={'blank'} href={song.link}>
                {song.title}:
              </a>
              <span> {song.artist}</span>
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

export default SongsList;
