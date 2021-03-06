import React from 'react';
import Nav from '../components/nav';
const Contact = props => {
  return (
    <div className="container">
      <Nav />
      <ul>
        <li>You can email me at <a href="mailto:mnawa31@gmail.com" target="_top">mnawa31@gmail.com</a></li>
        <li>Download my resume<a href="../static/Maximillian Nawa.pdf" download="Maximillian Nawa"> here.</a></li>
        <li>Connect with me on LinkedIn <a href="https://www.linkedin.com/in/maximillian-nawa/" target="blank"> here</a></li>
      </ul>
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
        ul {
          list-style: none;
          margin-top: 20%;
        }
        li {
          line-height: 80px;
        }
        li a  {
          text-decoration: none;
          color: #ff6c00;
        }
        @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
          .container {
            margin: 130px 30%;
            font-size: 1.5em;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
