import React from 'react';
import Link from 'next/link';

const Nav = () => (
  <nav className="navbar-container">
    <Link href="/">
      <a className="home">Max Nawa</a>
    </Link>
    <Link href="/library">
      <a className="navbar-link">Library</a>
    </Link>
    <Link href="/contact">
      <a className="navbar-link">Contact</a>
    </Link>

    <style jsx>
      {`
        .navbar-container {
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
          width: 100%;
        }
        .home {
          font-size: 17px;
          font-weight: bold;
          text-decoration: none;
          color: black;
        }
        .navbar-link {
          color: #ff6c00;
          text-decoration: none;
          font-size: 17px;
        }
      `}
    </style>
  </nav>
);

export default Nav;
