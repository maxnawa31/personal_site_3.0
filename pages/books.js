import React, { Component } from 'react';
import Nav from '../components/nav';
import BooksForm from '../components/BooksForm';
import BooksList from '../components/BooksList';
class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      loading: false
    };
  }

  fetchBooks = () => {
    fetch('https://max-personal-website-backend.herokuapp.com/books')
      .then(res => res.json())
      .then(data => this.setState({ books: data }));
  }
  componentDidMount() {
    this.fetchBooks();
  }

  handleLoading = () => {
    this.setState({ loading: !this.state.loading }, () => console.log(this.state.loading, this.state.books));
  };
  render() {
    return [
      <div className="container">
        <Nav />
        <BooksForm fetchBooks={this.fetchBooks} handleLoading={this.handleLoading} />

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
      <BooksList books={this.state.books} />
    ];
  }
}

export default Books;
