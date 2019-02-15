import React from 'react';
import Link from 'next/link';
import Nav from '../components/nav';
const Home = () => (
  <div className="container">
    <Nav />
    <div className="body">
      Hello, I'm Max, a software engineer based in the San Francisco Bay Area.
      Before becoming an engineer I studied History of Art at U.C. Berkeley.
      <br /> I enjoy books, music, football and hockey. You can see
      what books, music and movies I'm into
      <Link href="/library">
        <a className="body-link"> here</a>
      </Link>
      . In addition, you can add any recommendations you may have. Thank you for
      visiting my page.
    </div>
    <img src="../static/IMG_0598.JPG" />
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

        .body {
          line-height: 25px;
          margin-top: 15%;
        }
        .body-link {
          color: #ff6c00;
          text-decoration: none;
        }

        br {
          line-height: 70px;
        }

        img {
          margin-top: 10%;
          width: 100%;
        }
        @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
          .container {
            margin: 130px 30%;
            font-size: 1.5em;
          }
        }
      `}
    </style>
  </div>
);

export default Home;
