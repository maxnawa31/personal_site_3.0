import React from 'react';
import Loader from '../components/Loader';
const BooksList = props => {
  const { books } = props;
  if(books.length === 0) {
    return <Loader/>
  }
  return (
    <ul>
      {books.map(book => {
        return (
          <ul className='list-container'>
            <li>
              <a target={'blank'} href={book.link}>{book.title}:</a>
              <span> {book.author}</span>
            </li>
            <style jsx>{`
              .list-container {
                margin-left: 10%;
                width: 40%;
                list-style-type: disc
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

export default BooksList;
