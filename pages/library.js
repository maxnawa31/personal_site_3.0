import React from 'react';
import Nav from '../components/nav'
import Link from 'next/link';
const Library = (props) => {
  return (
    <div className='container'>
    <Nav/>
      <nav className='library-nav'>
      <span> Click to view:</span>
      <Link href="/books">
      <a className="navbar-link">Books</a>
    </Link>
    <Link href="/songs">
      <a className="navbar-link">Songs</a>
    </Link>
    <Link href="/movies">
      <a className="navbar-link">Movies</a>
    </Link>
      </nav>
    <style jsx>{`
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

      .library-nav {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-top: 15%;
        line-height: 40px;
      }
      a {
        text-decoration: none;
        color:#ff6c00;
      }
      span {
        margin-bottom: 4%;
      }
      @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
        .container {
          margin: 130px 30%;
          font-size: 1.5em;
        }
      }
    `}</style>
    </div>
  )
}

export default Library